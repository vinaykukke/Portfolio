// Runs once for every vertex with a given object
varying vec2 vertexUV;

void main() {

  vertexUV = uv;

  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

  gl_Position = projectionMatrix * mvPosition;

}