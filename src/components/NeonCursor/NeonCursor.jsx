import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NeonCursor() {
  const location = useLocation();

  useEffect(() => {
    const colorMap = {
      "/": "rgba(255, 0, 255, 1)",        // home → magenta
      "/about": "rgba(0, 255, 213, 1)",    // about → teal
      "/projects": "rgba(235, 74, 74, 1)", // projects → neon red
      "/contact": "rgba(255, 255, 0, 1)",  // contact → yellow
    };

    const glowColor = colorMap[location.pathname] || "rgba(255, 0, 255, 1)";

    import("https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js").then(({ neonCursor }) => {
      neonCursor({
        el: document.getElementById("root"),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
        color1: glowColor,
        color2: glowColor
      });
    });
  }, [location.pathname]);

  return null;
}
