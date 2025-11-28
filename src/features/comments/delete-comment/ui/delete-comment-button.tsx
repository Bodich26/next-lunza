"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { XButton } from "@/shared";
import { useDeleteComment } from "../model/use-delete-comment";

type Props = {
  commentId: number;
  postId: number;
};

export const DeleteCommentButton = ({ commentId, postId }: Props) => {
  const { handleDeleteComment } = useDeleteComment(commentId, postId);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={2}
      cursor={"pointer"}
      _hover={{ background: "bg.muted" }}
      padding={"8px"}
      rounded={"md"}
      onClick={handleDeleteComment}
    >
      <XButton />
      <Text as={"span"}>Удалить</Text>
    </Box>
  );
};
