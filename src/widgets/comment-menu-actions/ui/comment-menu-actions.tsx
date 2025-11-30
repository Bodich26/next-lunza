"use client";
import { useMyProfileApi } from "@/entities/user";
import { DeleteCommentButton } from "@/features/comments/delete-comment";
import { UpdateCommentButton } from "@/features/comments/update-comment";
import { Box, Popover, Portal, Text } from "@chakra-ui/react";
import { Asterisk, Ellipsis } from "lucide-react";

type Props = {
  commentId: number;
  userId: string;
  postId: number;
  textComment: string;
};

export const CommentMenuActions = ({
  commentId,
  userId,
  postId,
  textComment,
}: Props) => {
  const { data: profile } = useMyProfileApi();
  const currentUserId = profile?.id;

  return (
    <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
      <Popover.Root positioning={{ placement: "bottom-end" }}>
        <Popover.Trigger>
          <Ellipsis cursor={"pointer"} />
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content minW="unset" w="fit-content">
              <Popover.Body
                background={"bg.card"}
                display={"flex"}
                flexDirection={"column"}
                padding={"8px"}
              >
                {userId === currentUserId ? (
                  <>
                    <UpdateCommentButton
                      textComment={textComment}
                      commentId={commentId}
                    />
                    <DeleteCommentButton
                      commentId={commentId}
                      postId={postId}
                    />
                  </>
                ) : (
                  <>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={2}
                      cursor={"pointer"}
                      _hover={{ background: "bg.muted" }}
                      padding={"8px"}
                      rounded={"md"}
                      onClick={() => console.log("g")}
                    >
                      <Asterisk />
                      <Text as={"span"}>Что то другое</Text>
                    </Box>
                  </>
                )}
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </Box>
  );
};
