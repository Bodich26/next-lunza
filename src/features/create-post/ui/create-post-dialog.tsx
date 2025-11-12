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
    >
      <Portal>
        <CustomOverlay isActive={isOpen} display="desktop" zIndex="100" />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {/* Форма */}
              <CreatePostForm />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Закрыть</Button>
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
