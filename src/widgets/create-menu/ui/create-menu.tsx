"use client";
import { CreatePostButton } from "@/features/create-post";
import { Button, Popover, Portal } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

export const CreateMenu = () => {
  return (
    <Popover.Root size="xs">
      <Popover.Trigger asChild>
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
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content background={"bg.card"} w={"full"}>
            <Popover.Body>
              <CreatePostButton />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
