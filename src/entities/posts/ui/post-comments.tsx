import { Box, Separator, Text } from "@chakra-ui/react";

const comments = Array.from({ length: 1 });
export const PostComments = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent="flex-start"
      alignItems="center"
      w={"full"}
      overflowY="auto"
      position={"relative"}
    >
      <Box
        as={"div"}
        w={"100%"}
        display={{ base: "none", mdDown: "block" }}
        padding={"16px"}
        position="sticky"
        top="0"
        zIndex="1"
        background="cardBackground"
      >
        <Text as="p" textStyle="lg" textAlign="start">
          Комментарии
        </Text>
        <Separator
          display={{
            base: "flex",
            md: "none",
          }}
          marginTop="12px"
          background="colorGrayWhite"
          h="0.5"
          w="full"
          rounded="full"
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"32px"}
        paddingX={{ base: "0px", mdDown: "16px" }}
        paddingY={"16px"}
        w={"100%"}
        h={"100vh"}
      >
        {comments.length > 0 ? (
          comments.map((_, i) => (
            <div
              key={i}
              className="w-full border-2 border-amber-300 rounded-md"
            >
              {i + 1}
            </div>
          ))
        ) : (
          <Box
            display={"flex"}
            flexGrow={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text as="p" textStyle="md" opacity="40%" textAlign="center">
              Нет комментариев...
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
