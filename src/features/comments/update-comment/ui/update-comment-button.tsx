"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { PencilButton } from "@/shared";

export const UpdateCommentButton = () => {
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
      <PencilButton />
      <Text as={"span"}>Изменить</Text>
    </Box>
  );
};
