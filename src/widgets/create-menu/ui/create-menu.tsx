"use client";
import { CreatePostButton } from "@/features/create-post";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

export const CreateMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="solid"
          background={"accent.primary"}
          color={"text.white"}
          rounded={"md"}
          _active={{ background: "rose.800" }}
          _hover={{ background: "rose.800" }}
        >
          Создать <BiPlus />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content background={"bg.card"} w={"full"}>
            <Menu.Item value="add_post" _hover={{ background: "bg.muted" }}>
              <CreatePostButton />
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
