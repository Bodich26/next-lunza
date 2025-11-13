"use client";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { CreatePostForm } from "./create-post-form";
import { useCreatePostDialogStore } from "../model/use-create-post-dialog-store";
import { CustomOverlay } from "@/shared";

export const CreatePostDialog = () => {
  const { isOpen, close } = useCreatePostDialogStore();

  return (
    <Dialog.Root
      placement="center"
      closeOnInteractOutside={false}
      open={isOpen}
      onOpenChange={() => close()}
      size={"lg"}
    >
      <Portal>
        <CustomOverlay isActive={isOpen} display="desktop" zIndex="1000" />
        <Dialog.Positioner>
          <Dialog.Content background={"bg.app"}>
            <Dialog.Header>
              <Dialog.Title>Добавление публикации</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {/* Форма */}
              <CreatePostForm />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Отмена</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
