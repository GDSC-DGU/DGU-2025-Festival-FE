import { create } from "zustand";

interface AuthState {
  isAdminLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAdminLoggedIn: true,
  login: () => set({ isAdminLoggedIn: true }),
  logout: () => set({ isAdminLoggedIn: false }),
}));
