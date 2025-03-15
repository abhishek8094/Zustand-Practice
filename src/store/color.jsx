import { create } from "zustand";

export const useColor = create((set) => ({
  text: "black",
  color: "black",

  setText: (text) => set({ text }),

  setColor: (color) => set({ color }),
}));
