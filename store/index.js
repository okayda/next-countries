import { create } from "zustand";

const useStore = create((set) => ({
  currentRegion: "all",
  currentDrop: false,
  search: "",

  updateRegion: (region) =>
    set(() => ({
      currentRegion: region,
    })),

  updateDrop: () =>
    set((state) => ({
      currentDrop: !state.currentDrop,
    })),

  updateSearch: (value) =>
    set(() => ({
      search: value,
    })),
}));

export default useStore;
