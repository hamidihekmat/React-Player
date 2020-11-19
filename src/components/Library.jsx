import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong, libraryState }) {
  return (
    <div className={`library ${libraryState && "active-library"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            songs={songs}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
