import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";
import { useSongs, useCurrentSong } from "./store/store";

function App() {
  // Zustand
  const songs = useSongs((state) => state.songs);
  const setSongs = useSongs((state) => state.setSongs);
  const currentSong = useCurrentSong((state) => state.currentSong);
  const setCurrentSong = useCurrentSong((state) => state.setCurrentSong);

  // Zustand
  const [libraryState, setLibraryState] = useState(false);
  // const [songs] = useState(data());
  // const [currentSong, setCurrentSong] = useState({});
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

  useEffect(() => {
    setSongs(data());
    const current = data()[0];
    current.active = true;
    setCurrentSong(current);
  }, [setSongs, setCurrentSong]);

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
