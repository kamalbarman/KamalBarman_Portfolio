import React, { useEffect } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  useEffect(() => {
    const trail = [];
    const maxTrail = 20;

    for (let i = 0; i < maxTrail; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      document.body.appendChild(dot);
      trail.push(dot);
    }

    let mouse = { x: 0, y: 0 };
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    let index = 0;
    function animateTrail() {
      const dot = trail[index];
      dot.style.left = mouse.x + "px";
      dot.style.top = mouse.y + "px";
      index = (index + 1) % maxTrail;
      requestAnimationFrame(animateTrail);
    }

    animateTrail();

    return () => {
      trail.forEach((dot) => dot.remove());
    };
  }, []);

  return null; // Nothing to render inside React
};

export default CursorTrail;
