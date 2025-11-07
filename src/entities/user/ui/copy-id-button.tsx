import { Button } from "@chakra-ui/react";

export const CopyIdButton = () => {
  return (
    <Button
      variant="solid"
      colorPalette={"gray"}
      color={"text.inverse"}
      rounded={"md"}
      width={{ smDown: "full" }}
    >
      Копировать ID
    </Button>
  );
};
