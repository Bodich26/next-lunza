"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { PencilButton } from "@/shared";
import { useEditCommentStore } from "../model/use-edit-comment-store";

type Props = {
  commentId: number;
  textComment: string;
};

export const UpdateCommentButton = ({ commentId, textComment }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={2}
      cursor={"pointer"}
      _hover={{ background: "bg.muted" }}
      padding={"8px"}
      rounded={"md"}
      onClick={() =>
        useEditCommentStore.getState().startEditing(commentId, textComment)
      }
    >
      <PencilButton />
      <Text as={"span"}>Изменить</Text>
    </Box>
  );
};
