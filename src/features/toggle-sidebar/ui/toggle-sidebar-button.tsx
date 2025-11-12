"use client";
import { TextAlignJustify } from "lucide-react";
import { CustomIcon } from "@/shared";
import { Box } from "@chakra-ui/react";
import { useToggleSidebarStore } from "../model/use-toggle-sidebar-store";

export const ToggleSidebarButton = () => {
  const open = useToggleSidebarStore((state) => state.open);

  return (
    <Box
      display={{
        base: "block",
        md: "none",
      }}
    >
      <CustomIcon
        iconWidth={30}
        iconHeight={30}
        onClick={open}
        icon={TextAlignJustify}
      />
    </Box>
  );
};
