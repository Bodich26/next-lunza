import { Box, Link, Separator, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PUBLIC_ROUTES } from "routes";
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
        background="bg.card"
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
          background="bg.subtle"
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
            <Box
              key={i}
              className="w-full rounded-md "
              background={"bg.muted"}
              padding={"1.5"}
            >
              <Text
                as="p"
                textStyle="sm"
                textAlign="start"
                marginBottom={"12px"}
              >
                Вау ты ваще такой интересный тип. Вау ты ваще такой интересный
                тип. Вау ты ваще такой интересный тип.
              </Text>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                gap={"8px"}
              >
                <Text as="p" textStyle="sm" textAlign="start" opacity={"60%"}>
                  автор
                </Text>
                <Link
                  as={NextLink}
                  href={`${PUBLIC_ROUTES.USER}/bodich`}
                  textStyle="md"
                  textAlign="end"
                  target="_black"
                >
                  Bodich
                </Link>
              </Box>
            </Box>
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
