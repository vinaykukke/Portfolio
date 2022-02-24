import { MouseEvent, useRef } from "react";
import styles from "./square.module.scss";

const DEFAULT_SQUARES_NR = 300;

interface ISquareProps {
  numberOfSquares?: number;
}

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const Square = (props: ISquareProps) => {
  const { numberOfSquares } = props;
  const canvas = useRef<HTMLCanvasElement>(null);
  const num = numberOfSquares ? numberOfSquares : DEFAULT_SQUARES_NR;
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const handleMouseOver = (e: MouseEvent<HTMLCanvasElement>) => {
    const c = canvas.current;
    const ctx = c.getContext("2d");
    const shape = new Path2D();
    ctx.fillStyle = "red";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    shape.rect(0, 0, 200, 120);
    ctx.fill(shape);
    // Check whether point is inside circle
    if (
      ctx.isPointInPath(shape, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ) {
      ctx.fillStyle = "blue";
    } else {
      ctx.fillStyle = "#1d1d1d";
    }

    // Draw rect
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.fill(shape);
  };

  return (
    <canvas
      className={styles.squareContainer}
      id="myCanvas"
      width={300}
      height={150}
      ref={canvas}
      onMouseMove={handleMouseOver}
    >
      Your browser does not support the HTML5 canvas tag
    </canvas>
  );
};

export default Square;
