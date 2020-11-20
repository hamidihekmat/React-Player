import { useState } from "react";
import { useIsPlaying } from "../store/store";

export const usePlay = (audioRef) => {
  const isPlaying = useIsPlaying((state) => state.isPlaying);
  const toggle = useIsPlaying((state) => state.toggle);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      toggle();
    } else {
      audioRef.current.play();
      toggle();
    }
  };

  const dragHandler = (event) => {
    const currentTime = event.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({
      ...songInfo,
      currentTime,
    });
  };

  return [songInfo, playSongHandler, timeUpdateHandler, dragHandler];
};
