import { create } from "zustand";
import { persist } from "zustand/middleware";

const themes = [
  "theme-white",
  "theme-black",
  // "theme-orange",
  // "theme-purple",
  // "theme-green",
  // "theme-blue",
];

type ThemeState = {
  theme: string;
  themes: string[];
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: themes[0],
      themes,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage", // key in localStorage
    }
  )
);
