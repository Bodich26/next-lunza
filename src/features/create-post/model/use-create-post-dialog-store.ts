import { create } from "zustand";

interface CreatePostDialogState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCreatePostDialogStore = create<CreatePostDialogState>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  })
);
