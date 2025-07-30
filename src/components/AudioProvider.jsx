// src/components/AudioProvider.jsx
import React, { createContext, useEffect, useRef, useState } from "react";
import CKT from "../assets/CKT.mp3";

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(CKT));
  const [audioCtx] = useState(() => new (window.AudioContext || window.webkitAudioContext)());
  const [analyser, setAnalyser] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.crossOrigin = "anonymous";

    const startAudio = () => {
      if (initialized) return;
      try {
        audioCtx.resume().then(() => {
          const source = audioCtx.createMediaElementSource(audio);
          const analyserNode = audioCtx.createAnalyser();
          analyserNode.fftSize = 256;

          source.connect(analyserNode);
          analyserNode.connect(audioCtx.destination);

          audio.play().catch((e) => {
            console.warn("Autoplay blocked:", e);
          });

          setAnalyser(analyserNode);
          setInitialized(true);

          // Remove listeners
          window.removeEventListener("click", startAudio);
          window.removeEventListener("scroll", startAudio);
        });
      } catch (err) {
        console.error("Audio init failed:", err);
      }
    };

    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
    };
  }, [audioCtx, initialized]);

  return (
    <AudioContext.Provider value={{ audio: audioRef.current, analyser }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
