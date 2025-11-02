"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "routes";

type Props = {
  errorMessage: string;
  type: "page" | "definition";
};
export const ShowErrors = ({ errorMessage, type }: Props) => {
  const route = useRouter();
  if (type === "page") {
    return (
      <Box
        w={"full"}
        background={"cardBackground"}
        rounded={"md"}
        padding={5}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Text as={"p"} fontSize={"lg"} textAlign={"center"}>
          {errorMessage}
        </Text>

        <Button
          onClick={() => window.location.reload()}
          variant="solid"
          colorPalette={"gray"}
          color={"textWhite"}
          rounded={"md"}
          _dark={{ color: "black" }}
          margin={"0 auto"}
          width={{ base: "178px", smDown: "full" }}
        >
          Обновить
        </Button>
      </Box>
    );
  }
  if (type === "definition") {
    return (
      <Box
        w={"full"}
        background={"cardBackground"}
        roundedBottom={"md"}
        padding={5}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Text as={"p"} fontSize={"lg"} textAlign={"center"}>
          {errorMessage}
        </Text>

        <Button
          onClick={() => route.push(PUBLIC_ROUTES.MAIN)}
          variant="solid"
          colorPalette={"gray"}
          color={"textWhite"}
          rounded={"md"}
          _dark={{ color: "black" }}
          margin={"0 auto"}
          width={{ base: "178px", smDown: "full" }}
        >
          На главную
        </Button>
      </Box>
    );
  }

  return null;
};
