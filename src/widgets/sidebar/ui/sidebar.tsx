import { IconAvatar } from "@/shared";
import { Box, Flex, Separator } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Box
      width={"60px"}
      background="cardBackground"
      paddingY="3"
      paddingX="2"
      wordBreak="break-word"
      position={"fixed"}
      top="0"
      left="0"
      zIndex="100"
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={"5"}
      roundedBottomRight={"md"}
    >
      {/** Top */}
      <Flex flexDirection={"column"} justifyContent={"space-between"} gap={"5"}>
        <IconAvatar />
        <Separator
          background={"colorGrayWhite"}
          h={"0.5"}
          w={"full"}
          rounded={"full"}
        />
      </Flex>

      {/** Center */}
      <Flex justifyContent={"flex-start"} flexDirection={"column"} flexGrow={1}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>

      {/** Bottom */}
      <Flex flexDirection={"column"} justifyContent={"space-between"} gap={"5"}>
        <Separator
          background={"colorGrayWhite"}
          h={"0.5"}
          w={"full"}
          rounded={"full"}
        />
        <Box height={"86px"} background={"GrayText"} rounded={"lg"}>
          3
        </Box>
      </Flex>
    </Box>
  );
};
