import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PUBLIC_ROUTES } from "routes";

type Props = {
  userName: string;
  content: string;
};
export const CommentItem = ({ userName, content }: Props) => {
  return (
    <Box className="w-full rounded-md " background={"bg.muted"} padding={"1.5"}>
      <Text as="p" textStyle="sm" textAlign="start" marginBottom={"12px"}>
        {content}
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
          href={`${PUBLIC_ROUTES.USER}/${userName}`}
          textStyle="md"
          textAlign="end"
          target="_black"
          outline={"none"}
        >
          {userName}
        </Link>
      </Box>
    </Box>
  );
};
