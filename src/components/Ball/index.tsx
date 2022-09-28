import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import fragmentShaderCode from "./fragmentshader.glsl";
import vertexShaderCode from "./vertexshader.glsl";
import styles from "./ball.module.scss";

/** User Interaction */
let isUserInteracting = false;

/** User Interaction Event*/
const mouseMoveEndEvent = new Event("mouseMoveEnd");
let timeout: NodeJS.Timeout = null;

/** Vectors for mouse events */
const moveMouse = new THREE.Vector2();
let orbit;

const AnimatedBall = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  let timeStart: number;
  let timeDelta: number;
  let time: number;

  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let mesh: THREE.Mesh;

  let animationTime = 1.0;

  const uniforms = {
    time: { value: 0.0 },
    animationTime: { value: 1.0 },
  };

  const init = () => {
    timeStart = new Date().getTime();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x1d1d1d);
    renderer.setSize(window.innerWidth, window.innerHeight, true);
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const aspect =
      renderer.getContext().drawingBufferWidth /
      renderer.getContext().drawingBufferHeight;

    camera = new THREE.PerspectiveCamera(60, aspect);
    camera.position.set(4, 1, 2);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.updateProjectionMatrix();

    rootRef.current.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    makeContents();
    addInputListeners();
    animate();
  };

  const makeContents = () => {
    const geometry = new THREE.SphereGeometry(1.5, 128, 256);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertexShaderCode,
      fragmentShader: fragmentShaderCode,
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  };

  const resizeRendererToDisplaySize = (root?: HTMLElement) => {
    if (root) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize =
        width !== root.clientWidth || height !== root.clientHeight;

      if (needResize) {
        renderer.setSize(root.clientWidth, root.clientHeight);
      }

      return needResize;
    }
  };

  const animate = useCallback(() => {
    if (resizeRendererToDisplaySize(rootRef.current)) {
      camera.aspect =
        rootRef.current.clientWidth / rootRef.current.clientHeight;
      camera.updateProjectionMatrix();
    }

    updateTime();

    uniforms.time.value = time;
    uniforms.animationTime.value = animationTime;

    renderer.render(scene, camera);

    if (isUserInteracting) requestAnimationFrame(animate);
  }, []);

  const updateTime = () => {
    const newTime = (new Date().getTime() - timeStart) / 1000;
    timeDelta = newTime - time;
    time = newTime;

    if (animationTime < 1.0) {
      const animationSpeed = 0.8;
      animationTime += timeDelta * animationSpeed;
    }
  };

  const addInputListeners = () => {
    const click = () => (animationTime = 0);

    document.addEventListener("click", click);
    document.addEventListener("touchstart", click);
    document.addEventListener("keydown", click);
  };

  const handleMouseMove = (event: PointerEvent) => {
    if (!isUserInteracting) {
      isUserInteracting = true;
      animate();
    }

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(
      () => rootRef.current?.dispatchEvent(mouseMoveEndEvent),
      1000 * 10
    );

    /** Offset values for the canvas */
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    /** calculate pointer position in normalized device coordinates (-1 to +1) */
    moveMouse.x = x * 2 - 1;
    moveMouse.y = -y * 2 + 1;

    let scale = -0.005;
    orbit.rotateY(event.movementX * scale);
    orbit.rotateX(event.movementY * scale);
    orbit.rotation.z = 0; //this is important to keep the camera level..
  };

  useEffect(() => init(), []);

  useEffect(() => {
    /** User Interaction Event */
    document.addEventListener("pointermove", handleMouseMove);
    rootRef.current.addEventListener(
      "mouseMoveEnd",
      () => (isUserInteracting = false)
    );

    /** Start the animation */
    isUserInteracting = true;

    //the camera rotation pivot
    orbit = new THREE.Object3D();
    orbit.rotation.order = "YXZ"; //this is important to keep level, so Z should be the last axis to rotate in order...
    orbit.position.copy(mesh.position);
    scene.add(orbit);

    //offset the camera and add it to the pivot
    //you could adapt the code so that you can 'zoom' by changing the z value in camera.position in a mousewheel event..
    // let cameraDistance = 1;
    // camera.position.z = cameraDistance;
    orbit.add(camera);

    animate();
  }, [animate]);

  return (
    <div className={styles.three_js__root} id="three_js__root" ref={rootRef} />
  );
};

export default AnimatedBall;
