import { create } from "zustand";

interface EditCommentState {
  editingId: number | null;
  initialText: string;
  editableText: string;

  startEditing: (id: number, text: string) => void;
  setEditableText: (value: string) => void;
  stopEditing: () => void;
}

export const useEditCommentStore = create<EditCommentState>((set) => ({
  editingId: null,
  initialText: "",
  editableText: "",

  startEditing: (id, text) =>
    set({
      editingId: id,
      initialText: text,
      editableText: text,
    }),

  setEditableText: (value) => set({ editableText: value }),

  stopEditing: () =>
    set({
      editingId: null,
      initialText: "",
      editableText: "",
    }),
}));
