"use client";
import { Box } from "@chakra-ui/react";

type Props = {
  onClick?: () => void;
  isActive: boolean;
  display: "mobile" | "desktop";
  zIndex: string;
};

export const CustomOverlay = ({
  onClick,
  isActive,
  display,
  zIndex,
}: Props) => {
  const displayOverlay =
    display === "mobile"
      ? { base: isActive ? "block" : "none", md: "none" }
      : { base: isActive ? "block" : "none" };

  return (
    <Box
      onClick={onClick}
      display={displayOverlay}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      background="rgba(0,0,0,0.4)"
      zIndex={zIndex}
      cursor="pointer"
    />
  );
};
