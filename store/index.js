import { create } from "zustand";

const useStore = create((set) => ({
  currentRegion: "All",
  isDropdown: false,

  updateDropdown: () =>
    set((state) => ({
      isDropdown: state.isDropdown ? false : true,
    })),
}));

export default useStore;
