"use client";

import React from "react";
import { activeLinkMenu, IconAvatar, SidebarMenu } from "@/shared";
import { Box, Flex, List, Separator } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <Box
      width={"60px"}
      background="cardBackground"
      paddingY="3"
      paddingX="2"
      wordBreak="break-word"
      position={"fixed"}
      top="0"
      left="0"
      zIndex="100"
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={"5"}
      roundedBottomRight={"md"}
    >
      {/** Top */}
      <Flex flexDirection={"column"} justifyContent={"space-between"} gap={"5"}>
        <IconAvatar />
        <Separator
          background={"colorGrayWhite"}
          h={"0.5"}
          w={"full"}
          rounded={"full"}
        />
      </Flex>

      {/** Center */}
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"column"}
        flexGrow={1}
      >
        <List.Root as="ul" variant={"plain"} gap={"6"}>
          {SidebarMenu.map((group) =>
            group.list.map((link, linkIndex) => {
              const isActive = activeLinkMenu(pathName, link.path);

              return (
                <SidebarItem key={linkIndex} link={link} isActive={isActive} />
              );
            })
          )}
        </List.Root>
      </Flex>

      {/** Bottom */}
      <Flex flexDirection={"column"} justifyContent={"space-between"} gap={"5"}>
        <Separator
          background={"colorGrayWhite"}
          h={"0.5"}
          w={"full"}
          rounded={"full"}
        />
        <Box height={"86px"} background={"GrayText"} rounded={"lg"}>
          3
        </Box>
      </Flex>
    </Box>
  );
};
