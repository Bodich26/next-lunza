"use client";
import { useContext } from "react";
import { SidebarContext } from "./sidebar-context";

export const useToggleSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useToggleSidebar must be used within a SidebarProvider");
  }
  return context;
};
