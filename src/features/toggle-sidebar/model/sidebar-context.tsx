"use client";
import { createContext } from "react";

export interface SidebarContextValue {
  isOpen: boolean;
  handleToggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);
