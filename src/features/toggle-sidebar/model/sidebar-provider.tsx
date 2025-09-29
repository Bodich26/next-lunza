"use client";
import React from "react";
import { SidebarContext, SidebarContextValue } from "./sidebar-context";

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleToggleSidebar = () => setIsOpen(!isOpen);

  const value: SidebarContextValue = { isOpen, handleToggleSidebar };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
