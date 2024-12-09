import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

// Define the types for the authentication state
interface User {
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error?: string | null;
  setIsAuthenticate: () => void;
  clearAuthStore: () => void;
  checkIfAuthencated: () => void;
}

// Create Zustand store
const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setIsAuthenticate: () => {
        set({
          isAuthenticated: true,
        });
      },
      clearAuthStore: () => {
        set({
          isAuthenticated: false,
        });
      },
      checkIfAuthencated: () => {},
    }),
    {
      name: "authStore",
    }
  ) as StateCreator<AuthState, [], []>
);

export default useAuthStore;
