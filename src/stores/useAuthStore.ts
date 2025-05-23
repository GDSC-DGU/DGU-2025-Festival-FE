import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Role } from "@/pages/admin/types/role";

interface AuthState {
  token: string | null;
  isAdminLoggedIn: boolean;
  role: Role | null;
  login: (token: string, role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAdminLoggedIn: false,
      role: null,
      login: (token, role) => set({ token, isAdminLoggedIn: true, role }),
      logout: () => set({ token: null, isAdminLoggedIn: false, role: null }),
    }),
    {
      name: "auth",
    }
  )
);
