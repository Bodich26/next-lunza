"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { XButton } from "@/shared";

export const DeleteCommentButton = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={2}
      cursor={"pointer"}
      _hover={{ background: "bg.muted" }}
      padding={"8px"}
      rounded={"md"}
      onClick={() => console.log("g")}
    >
      <XButton />
      <Text as={"span"}>Удалить</Text>
    </Box>
  );
};
