"use client";
import React from "react";
import { Box, Flex, List, Separator } from "@chakra-ui/react";

import { activeLinkMenu, CustomIcon, IconAvatar, sidebarMenu } from "@/shared";
import { LogoutButton } from "@/features/auth";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { useToggleSidebar } from "@/features/toggle-sidebar";
import { SidebarOverlay } from "./sidebar-overlay";
import { ToggleDarkModeButton } from "@/features/dark-mode";
import { useMyProfileApi } from "@/entities/user";

export const Sidebar = () => {
  const { data: profile } = useMyProfileApi();
  const { isOpen, handleToggleSidebar } = useToggleSidebar();
  const pathName = usePathname();
  const sidebarDisplay = {
    base: isOpen ? "flex" : "none",
    md: "flex",
  };

  return (
    <>
      <SidebarOverlay onClick={handleToggleSidebar} isActive={isOpen} />
      <Box
        as={"aside"}
        width={"60px"}
        background="cardBackground"
        paddingY="3"
        paddingX="2"
        wordBreak="break-word"
        position={"fixed"}
        top={"0"}
        left={"0"}
        zIndex="100"
        height={"100vh"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        gap={"5"}
        roundedBottomRight={"md"}
        display={sidebarDisplay}
      >
        {/** Top */}
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={"5"}
        >
          <IconAvatar
            urlAvatar={profile?.avatar_url ?? "/user_default_avatar.svg"}
            userName={profile?.username ?? "Anon"}
          />

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
          overflowY={"auto"}
        >
          <List.Root as="ul" variant={"plain"} gap={"6"}>
            {sidebarMenu.map((group) =>
              group.list.map((link, linkIndex) => {
                const isActive = activeLinkMenu(pathName, link.path);
                return (
                  <SidebarItem key={linkIndex} link={link} isActive={isActive}>
                    <CustomIcon
                      icon={link.icon}
                      iconHeight={26}
                      iconWidth={26}
                      hoverEffect={isActive}
                      value={link.value!}
                    />
                  </SidebarItem>
                );
              })
            )}
          </List.Root>
        </Flex>

        {/** Bottom */}
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={"5"}
          alignItems={"center"}
        >
          <LogoutButton className={"hidden max-md:block"} />

          <Separator
            background={"colorGrayWhite"}
            h={"0.5"}
            w={"full"}
            rounded={"full"}
          />

          <ToggleDarkModeButton />
        </Flex>
      </Box>
    </>
  );
};
