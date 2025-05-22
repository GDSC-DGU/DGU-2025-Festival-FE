import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  isAdminLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAdminLoggedIn: false,
      login: (token: string) => set({ token, isAdminLoggedIn: true }),
      logout: () => set({ token: null, isAdminLoggedIn: false }),
    }),
    {
      name: "auth",
    }
  )
);
