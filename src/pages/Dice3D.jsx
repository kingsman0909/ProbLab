import { useEffect, useRef, useState } from "react";
import "./Dice3D.css";

// Face mapping based on the CSS cube:
// 1 = front, 2 = right, 3 = top,
// 4 = bottom, 5 = left, 6 = back
const finalRotations = {
  1: [0, 0],
  2: [0, -90],
  3: [-90, 0],
  4: [90, 0],
  5: [0, 90],
  6: [0, 180]
};

export default function Dice3D({
  rolling,
  onRollComplete
}) {
  const [rotation, setRotation] = useState([0, 0]);
  const rollingRef = useRef(false);

  useEffect(() => {
    if (!rolling || rollingRef.current) return;

    rollingRef.current = true;

    const result = Math.floor(Math.random() * 6) + 1;
    const [x, y] = finalRotations[result];

    // Animate multiple turns, then settle on the selected face.
    setRotation([
      x + 720,
      y + 720
    ]);

    const timer = setTimeout(() => {
      // Normalize to the exact final orientation.
      setRotation([x, y]);

      rollingRef.current = false;

      // Return the same number as the final visible face.
      onRollComplete(result);
    }, 1200);

    return () => clearTimeout(timer);
  }, [rolling, onRollComplete]);

  return (
    <div className="dice-scene">
      <div
        className="dice-cube"
        style={{
          transform: `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg)`
        }}
      >
        <div className="dice-face face-1">1</div>
        <div className="dice-face face-2">2</div>
        <div className="dice-face face-3">3</div>
        <div className="dice-face face-4">4</div>
        <div className="dice-face face-5">5</div>
        <div className="dice-face face-6">6</div>
      </div>
    </div>
  );
}