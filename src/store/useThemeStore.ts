import { create } from "zustand";

const themes = [
  "theme-black",
  "theme-orange",
  "theme-purple",
  "theme-green",
  "theme-blue",
];

type ThemeState = {
  theme: string;
  themes: string[];
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  themes,
  setTheme: (theme) => set({ theme }),
}));
