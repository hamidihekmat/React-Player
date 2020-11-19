import { useState } from "react";
import Nav from "./components/Nav";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";

function App() {
  const [libraryState, setLibraryState] = useState(false);
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const forwardHandler = () => {
    const currentIndex = songs.indexOf(currentSong);
    if (currentIndex + 1 < songs.length) {
      setCurrentSong(songs[currentIndex + 1]);
    } else {
      setCurrentSong(songs[0]);
    }
  };
  const previousHandler = () => {
    const currentIndex = songs.indexOf(currentSong);
    if (currentIndex === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[currentIndex - 1]);
    }
  };
  return (
    <div className="App">
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currentSong={currentSong} />
      <Player
        previousHandler={previousHandler}
        forwardHandler={forwardHandler}
        currentSong={currentSong}
      />
      <Library
        libraryState={libraryState}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
