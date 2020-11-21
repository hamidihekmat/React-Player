import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";
import { useSongs, useCurrentSong, useIsPlaying } from "./store/store";

function App() {
  // Zustand
  const songs = useSongs((state) => state.songs);
  const setSongs = useSongs((state) => state.setSongs);
  const currentSong = useCurrentSong((state) => state.currentSong);
  const setCurrentSong = useCurrentSong((state) => state.setCurrentSong);
  const play = useIsPlaying((state) => state.play);
  // Zustand
  const [libraryState, setLibraryState] = useState(false);
  const forwardHandler = () => {
    console.log("clicked");
    const currentIndex = songs.indexOf(currentSong);
    const index = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[index]);
    play();
  };
  const previousHandler = () => {
    const currentIndex = songs.indexOf(currentSong);
    const index = (currentIndex - 1) % songs.length;
    setCurrentSong(songs[index]);
    play();
  };

  useEffect(() => {
    data().then((result) => {
      setSongs(result);
      setCurrentSong(result[0]);
    });
  }, [setCurrentSong, setSongs]);

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
