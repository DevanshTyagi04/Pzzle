"use client";

import { create } from "zustand";
import { ReactNode } from "react";

interface ToastState {
  content: ReactNode | null;
  show: (content: ReactNode) => void;
  hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  content: null,

  show: (content) => {
    set({ content });
    setTimeout(() => set({ content: null }), 3500);
  },

  hide: () => set({ content: null }),
}));
