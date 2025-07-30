// src/components/AudioControls.jsx
import React, { useContext, useState, useEffect } from "react";
import { AudioContext } from "./AudioProvider";
import "./AudioControls.css";

const AudioControls = () => {
  const { audio } = useContext(AudioContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const checkStatus = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", checkStatus);
    audio.addEventListener("pause", checkStatus);
    return () => {
      audio.removeEventListener("play", checkStatus);
      audio.removeEventListener("pause", checkStatus);
    };
  }, [audio]);

  return (
    <button className={`audio-btn ${isPlaying ? "playing" : ""}`} onClick={togglePlay}>
      <span className="icon">
        {isPlaying ? "🔊" : "🔇"}
      </span>
    </button>
  );
};

export default AudioControls;
