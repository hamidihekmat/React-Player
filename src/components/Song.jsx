import React from 'react';
import { useIsPlaying } from '../store/store';
function Song({ currentSong }) {
  const isPlaying = useIsPlaying((state) => state.isPlaying);
  return (
    <div className="song-container">
      <img
        className={`${isPlaying ? 'current-song' : 'current-song pause'}`}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
