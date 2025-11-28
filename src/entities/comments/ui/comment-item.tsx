import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PUBLIC_ROUTES } from "routes";
import Image from "next/image";

type Props = {
  userName: string;
  content: string;
  avatarUrl: string;
  children?: React.ReactNode;
};
export const CommentItem = ({
  userName,
  content,
  avatarUrl,
  children,
}: Props) => {
  return (
    <Box className="w-full rounded-md " background={"bg.muted"} padding={"1.5"}>
      <Text as="p" textStyle="sm" textAlign="start" marginBottom={"8px"}>
        {content}
      </Text>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"8px"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
        >
          <Image
            src={avatarUrl}
            alt="image"
            width={32}
            height={32}
            className=" rounded-full"
          />
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
        {children}
      </Box>
    </Box>
  );
};
