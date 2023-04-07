import { create } from "zustand";

const useStore = create((set) => ({
  currentRegion: "all",
  currentDrop: false,

  updateRegion: (region) =>
    set(() => ({
      currentRegion: region,
    })),

  updateDrop: () =>
    set((state) => ({
      currentDrop: !state.currentDrop,
    })),
}));

export default useStore;
