"use client";

import { TextAlignJustify } from "lucide-react";
import { useToggleSidebar } from "../model/use-toggle-sidebar";
import { CustomIcon } from "@/shared";
import { Box } from "@chakra-ui/react";

export const ToggleSidebarButton = () => {
  const { handleToggleSidebar } = useToggleSidebar();

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
        onClick={handleToggleSidebar}
        icon={TextAlignJustify}
      />
    </Box>
  );
};
