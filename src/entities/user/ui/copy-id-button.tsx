import { Button } from "@chakra-ui/react";

export const CopyIdButton = () => {
  return (
    <Button
      color={"text.black"}
      background={"button.other"}
      rounded={"md"}
      width={{ smDown: "full" }}
      variant={"ghost"}
      borderColor={"none"}
      _hover={{ background: "button.other.effect" }}
      _active={{ background: "button.other.effect" }}
    >
      Копировать ID
    </Button>
  );
};
