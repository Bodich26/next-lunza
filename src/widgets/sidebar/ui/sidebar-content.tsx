"use client";
import React from "react";
import { activeLinkMenu, CustomIcon, IconAvatar, sidebarMenu } from "@/shared";
import { Box, Flex, List, Separator } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { LogoutButton } from "@/features/auth";

export const SidebarContent = () => {
  const pathName = usePathname();
  return (
    <>
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
        <Box height={"86px"} background={"GrayText"} rounded={"lg"}>
          Mode
        </Box>
      </Flex>
    </>
  );
};
