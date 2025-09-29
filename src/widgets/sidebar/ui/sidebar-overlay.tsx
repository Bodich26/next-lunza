"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const SidebarOverlay = ({ onClick, isActive }: Props) => {
  return (
    <Box
      onClick={onClick}
      display={{ base: isActive ? "block" : "none", md: "none" }}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      background="rgba(0,0,0,0.4)"
      zIndex="90"
      cursor="pointer"
    />
  );
};
