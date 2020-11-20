import create from "zustand";

export const useSongs = create((set) => ({
  songs: [],
  setSongs: (songs) => set({ songs }),
}));

export const useCurrentSong = create((set) => ({
  currentSong: {},
  setCurrentSong: (song) => set({ currentSong: song }),
}));

export const useIsPlaying = create((set) => ({
  isPlaying: false,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
