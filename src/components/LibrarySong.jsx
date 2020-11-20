import React from "react";
import { useCurrentSong } from "../store/store";
import { useIsPlaying } from "../store/store";

function LibrarySong({ song, setCurrentSong }) {
  const play = useIsPlaying((state) => state.play);
  const currentSong = useCurrentSong((state) => state.currentSong);
  const songSelectHandler = () => {
    setCurrentSong(song);
    play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        currentSong.id === song.id ? "selected " : ""
      } `}
    >
      <img className="library-img" src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
