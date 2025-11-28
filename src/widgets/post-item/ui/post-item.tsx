"use client";
import React from "react";
import {
  Box,
  CloseButton,
  Dialog,
  Portal,
  Separator,
  Text,
} from "@chakra-ui/react";
import { MessageSquareText } from "lucide-react";
import Image from "next/image";
import { useCommentsQuery } from "@/entities/comments";
import { PostCard, usePostDimensions } from "@/entities/posts";
import { PostComments } from "@/widgets/post-comments";
import { ToggleLikePost } from "@/features/toggle-like-post";
import { CreateCommentForm } from "@/features/comments/create-comment";

type Props = {
  id: number;
  imageUrl: string;
  postText: string;
  imageWidth: number;
  imageHeight: number;
};

export const PostItem = ({
  id,
  imageUrl,
  postText,
  imageWidth,
  imageHeight,
}: Props) => {
  const [showComments, setShowComments] = React.useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const toggleComments = () => setShowComments((prev) => !prev);

  const RIGHT_PANEL_WIDTH = 320;
  const GAP = 16;
  const PADDING = 16;

  const { aspectRatio, dialogMaxW, dialogMaxH, imageMaxWidth, imageMaxHeight } =
    usePostDimensions(imageWidth, imageHeight, RIGHT_PANEL_WIDTH, GAP, PADDING);

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: isErrorComments,
  } = useCommentsQuery(id, isDialogOpen);

  return (
    <Dialog.Root
      placement="center"
      open={isDialogOpen}
      onOpenChange={(details) => setIsDialogOpen(details.open)}
    >
      <Dialog.Trigger asChild>
        <PostCard imageUrl={imageUrl} onClick={() => setIsDialogOpen(true)} />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW={{ base: dialogMaxW, mdDown: "90vw", smDown: "100vw" }}
            maxH={{ base: dialogMaxH, mdDown: "90vh", smDown: "100vh" }}
            h={"100vh"}
            width="100%"
            rounded="md"
            overflow="hidden"
            background="bg.card"
          >
            <Dialog.Body padding={`${PADDING}px`} overflow={"auto"}>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap={`${GAP}px`}
                alignItems={{ base: "center", md: "stretch" }}
                justifyContent="center"
                width="100%"
              >
                {/* Изображение */}
                <Box
                  position="relative"
                  flexShrink={0}
                  flexGrow={0}
                  width={{ base: "100%", md: imageMaxWidth }}
                  height={{ base: dialogMaxH, md: imageMaxHeight }}
                  aspectRatio={aspectRatio}
                  rounded="md"
                  overflow="hidden"
                  minH="250px"
                >
                  {/* Фоновое размытие */}
                  <Image
                    src={imageUrl}
                    alt="blur background"
                    fill
                    className="object-cover blur-xs"
                    unoptimized
                  />

                  {/* Основное изображение */}
                  <Image
                    src={imageUrl}
                    alt="Post image"
                    fill
                    className="object-contain rounded-md relative "
                    unoptimized
                  />
                </Box>

                {/* Правая панель */}
                <Box
                  width={{
                    base: "100%",
                    md: RIGHT_PANEL_WIDTH,
                  }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  flexShrink={0}
                  flexGrow={0}
                  background={{ base: "transparent", md: "bg.card" }}
                  height="100%"
                  maxH={`calc(${dialogMaxH} - ${2 * PADDING}px)`}
                >
                  <Text
                    as="h3"
                    textStyle="md"
                    mt={{ base: "0px", md: "22px" }}
                    mb={{ base: "14px", md: "0px" }}
                  >
                    {postText}
                  </Text>

                  <Separator
                    display={{
                      base: "none",
                      md: "flex",
                    }}
                    marginTop="12px"
                    background="bg.subtle"
                    h="0.5"
                    w="full"
                    rounded="full"
                  />

                  <CloseButton
                    display={{
                      base: showComments ? "none" : "flex",
                      md: "none",
                    }}
                    size="sm"
                    position={{ base: "absolute", mdDown: "fixed" }}
                    top={{ base: "2", mdDown: "8", smDown: "2" }}
                    right={{ base: "2", mdDown: "8", smDown: "2" }}
                    zIndex={11}
                    onClick={toggleComments}
                  />
                  <Box
                    flexGrow={1}
                    overflowY="auto"
                    display={{
                      base: showComments ? "none" : "flex",
                      md: "flex",
                    }}
                    flexDirection={"column"}
                    insetY={{ mdDown: 6, smDown: 0 }}
                    insetX={{ mdDown: 6, smDown: 0 }}
                    zIndex={{ mdDown: 10 }}
                    position={{ mdDown: "fixed" }}
                    background={{ mdDown: "bg.card" }}
                    paddingBottom={"16px"}
                  >
                    {/* Коментарии  */}
                    <PostComments
                      comments={comments ?? []}
                      isLoading={isLoadingComments}
                      isError={isErrorComments ?? undefined}
                    />

                    {/* Создать комментарий  */}
                    <CreateCommentForm postId={id} />
                  </Box>

                  <Separator
                    display={{
                      base: "none",
                      md: "flex",
                    }}
                    marginBottom="12px"
                    background="bg.subtle"
                    h="0.5"
                    w="full"
                    rounded="full"
                  />

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                    gap="9px"
                  >
                    {/* Лайки  */}
                    <ToggleLikePost postId={id} isDialogOpen={isDialogOpen} />

                    <Box
                      onClick={toggleComments}
                      display={{ base: "flex" }}
                      alignItems="center"
                      gap="7px"
                      cursor={"pointer"}
                    >
                      <MessageSquareText width={28} height={28} />
                      {comments && comments.length ? (
                        <Text as="p" textStyle="md">
                          {comments.length}
                        </Text>
                      ) : null}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                position="absolute"
                right="2"
                top={{ base: "1", mdDown: "0" }}
                background={{ mdDown: "bg.card" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
