import React, { useEffect, useRef, useState } from "react";
import songFile from '../static/songs/kevin-san-lucas.mp3';

const useFirstInteraction = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keypress", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keypress", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keypress", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return hasInteracted;
};

const AudioPlayer = ({ song }) => {
  const audioRef = useRef();
  const hasInteracted = useFirstInteraction();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // Set initial volume to 5%
    }
  }, []);

  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Playback failed:", error);
      });
    }
  }, [hasInteracted]);

  return (
    <div>
      <h4>Now Playing: {song.name}</h4>
      <audio ref={audioRef} controls>
        <source src={songFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
