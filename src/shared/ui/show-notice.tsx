"use client";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  errorMessage: string;
};
export const ShowNotice = ({ errorMessage }: Props) => {
  return (
    <Box
      w={"full"}
      background={"bg.card"}
      rounded={"md"}
      padding={5}
      display={"flex"}
      flexDirection={"column"}
      mt={"24px"}
      gap={5}
    >
      <Text as={"p"} fontSize={"lg"} textAlign={"center"}>
        {errorMessage}
      </Text>
    </Box>
  );
};
