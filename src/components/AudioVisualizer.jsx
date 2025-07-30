import React, { useRef, useEffect, useContext } from "react";
import { AudioContext } from "./AudioProvider";
import "./AudioVisualizer.css";

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const { analyser } = useContext(AudioContext);

  useEffect(() => {
    if (!analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;

    let tick = 0;

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      // Fade previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🔊 Circular rainbow bars
      for (let i = 0; i < bufferLength; i++) {
        const angle = (i / bufferLength) * Math.PI * 2;
        const barLength = dataArray[i] * 3;

        const x1 = centerX + Math.cos(angle) * radius;
        const y1 = centerY + Math.sin(angle) * radius;
        const x2 = centerX + Math.cos(angle) * (radius + barLength);
        const y2 = centerY + Math.sin(angle) * (radius + barLength);

        const hue = (i * 4 + tick) % 360; // 🌈 Animated color
        ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // 🔘 Pulsing center dot
      const average =
        dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
      const pulseRadius = 10 + average * 0.1;

      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "white";
      ctx.fill();
      ctx.shadowBlur = 0;

      tick += 1;
    };

    draw();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [analyser]);

  return <canvas className="audio-circle-canvas" ref={canvasRef} />;
};

export default AudioVisualizer;
