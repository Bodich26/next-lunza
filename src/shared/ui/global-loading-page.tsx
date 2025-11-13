import { Spinner, Stack, Text } from "@chakra-ui/react";

export const GlobalLoadingPage = () => {
  return (
    <Stack
      position="fixed"
      inset={0}
      zIndex={10000}
      bg="bg.app"
      justify="center"
      align="center"
    >
      <Text
        as="h1"
        textTransform="uppercase"
        fontSize={{ base: "7xl", lg: "8xl", xl: "9xl" }}
        textAlign="center"
        fontWeight="bold"
        lineHeight="0.82em"
        letterSpacing="0.22em"
        color="text.primary"
        mb={"22px"}
      >
        Lunza
      </Text>
      <Spinner size="xl" color="accent.primary" />
    </Stack>
  );
};
