import { create } from "zustand";

const useStore = create((set) => ({
  currentRegion: "all",
  currentDrop: false,
  theme: false, // false = light theme
  search: "",

  updateRegion: (region) =>
    set(() => ({
      currentRegion: region,
    })),

  updateDrop: () =>
    set((state) => ({
      currentDrop: !state.currentDrop,
    })),

  updateTheme: () =>
    set((state) => ({
      theme: !state.theme,
    })),

  updateSearch: (value) =>
    set(() => ({
      search: value,
    })),
}));

export default useStore;
