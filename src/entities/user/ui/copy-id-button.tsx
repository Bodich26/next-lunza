import { Button } from "@chakra-ui/react";

export const CopyIdButton = () => {
  return (
    <Button
      variant="solid"
      colorPalette={"gray"}
      color={"textWhite"}
      rounded={"md"}
      _dark={{ color: "black" }}
      width={{ smDown: "full" }}
    >
      Копировать ID
    </Button>
  );
};
