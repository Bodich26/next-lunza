import { create } from "zustand";

interface TogglerSidebarState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useToggleSidebarStore = create<TogglerSidebarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
