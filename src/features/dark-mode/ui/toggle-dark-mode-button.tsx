"use client";
import { Switch, Icon, Flex, Skeleton, ClientOnly } from "@chakra-ui/react";
import { useColorMode } from "@/shared";
import { Moon, Sun } from "lucide-react";

export const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ClientOnly
      fallback={<Skeleton w="40px" h="86px" background={"colorGrayWhite"} />}
    >
      <Switch.Root
        size="lg"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control
          w="40px"
          h="86px"
          rounded={"md"}
          bg={"colorGrayWhite"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          p={"3px"}
        >
          {/* Иконка Sun */}
          <Flex
            w="full"
            h="50%"
            align="center"
            justify="center"
            borderRadius="md"
            bg={colorMode === "light" ? "accentColor" : "transparent"}
            transition="ease-in-out 0.2s!"
          >
            <Icon
              as={Sun}
              boxSize={6}
              color={colorMode === "light" ? "white" : "black"}
            />
          </Flex>

          {/* Иконка Moon */}
          <Flex
            w="full"
            h="50%"
            align="center"
            justify="center"
            borderRadius="md"
            bg={colorMode === "dark" ? "accentColor" : "transparent"}
            transition="ease-in-out 0.2s!"
          >
            <Icon
              as={Moon}
              boxSize={6}
              color={colorMode === "dark" ? "white" : "black"}
            />
          </Flex>
        </Switch.Control>
      </Switch.Root>
    </ClientOnly>
  );
};
