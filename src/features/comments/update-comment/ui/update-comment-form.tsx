"use client";
import React, { useRef } from "react";
import { Box, Button, Field, Input } from "@chakra-ui/react";
import { useUpdateComment } from "../model/use-update-comment";
import { useEditCommentStore } from "../model/use-edit-comment-store";
import { Check } from "lucide-react";
import { useClickOutside } from "@/shared";

type Props = {
  commentId: number;
  postId: number;
  closeForm: () => void;
};

export const UpdateCommentForm = ({ commentId, postId, closeForm }: Props) => {
  const { editableText, setEditableText } = useEditCommentStore();
  const { handleSubmitForm, isLoading, register, updateCommentErrors } =
    useUpdateComment(closeForm, commentId, postId, editableText);

  const ref = useRef<HTMLFormElement | null>(null);

  useClickOutside(ref, {
    onOutsideClick: () => {
      closeForm();
      setEditableText("");
    },
  });

  return (
    <Box
      position={"absolute"}
      rounded={"md"}
      w={"full"}
      inset={0}
      background={"bg.muted"}
      padding={"1.5"}
      top={"10px"}
    >
      <form
        ref={ref}
        onSubmit={handleSubmitForm}
        className="flex justify-between gap-3 "
      >
        <Field.Root invalid={!!updateCommentErrors}>
          <Input
            type="text"
            borderColor={"text.primary"}
            {...register("commentText")}
            value={editableText}
            onChange={(e) => setEditableText(e.target.value)}
          />
          {updateCommentErrors && (
            <Field.ErrorText>{updateCommentErrors.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Button
          className="w-[40px]"
          type="submit"
          colorPalette={"gray"}
          loading={isLoading}
        >
          <Check width={24} height={24} />
        </Button>
      </form>
    </Box>
  );
};
