import { CommentItem, TypePostsComments } from "@/entities/comments";
import { Box, Separator, Text } from "@chakra-ui/react";
import { PostCommentsSkeleton } from "./post-comments-skeleton";
import { ShowNotice } from "@/shared";
import { CommentMenuActions } from "@/widgets/comment-menu-actions";

type Props = {
  comments: TypePostsComments[];
  isLoading?: boolean;
  isError?: Error;
};
export const PostComments = ({ comments, isLoading, isError }: Props) => {
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
        {isLoading && <PostCommentsSkeleton />}

        {isError && <ShowNotice errorMessage={isError.message} />}

        {!isLoading && !isError && comments.length === 0 && (
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

        {comments.map((item, i) => (
          <CommentItem
            avatarUrl={item.user_avatar}
            userName={item.user_name}
            content={item.content}
            key={i}
          >
            <CommentMenuActions commentId={item.id} userId={item.user_id} />
          </CommentItem>
        ))}
      </Box>
    </Box>
  );
};
