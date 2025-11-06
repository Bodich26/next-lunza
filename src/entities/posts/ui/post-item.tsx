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
import { Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import { usePostDimensions } from "../model/use-post-dimensions";
import { PostImage } from "./post-image";
import { PostComments } from "./post-comments";

type Props = {
  id: string;
  imageUrl: string;
  postText: string;
  likesCount: number;
  imageWidth: number;
  imageHeight: number;
};

export const PostItem = ({
  id,
  imageUrl,
  postText,
  likesCount,
  imageWidth,
  imageHeight,
}: Props) => {
  const [showComments, setShowComments] = React.useState<boolean>(true);
  const toggleComments = () => setShowComments((prev) => !prev);

  const RIGHT_PANEL_WIDTH = 320;
  const GAP = 16;
  const PADDING = 16;

  const { aspectRatio, dialogMaxW, dialogMaxH, imageMaxWidth, imageMaxHeight } =
    usePostDimensions(imageWidth, imageHeight, PADDING, RIGHT_PANEL_WIDTH, GAP);

  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Box
          borderColor={"cardBackground"}
          className="relative h-[290px] border-3 shadow-black rounded-md flex items-center justify-center text-lg font-medium cursor-pointer"
        >
          <Image
            src={imageUrl}
            alt="Post Image"
            fill
            className="object-cover rounded-md"
            unoptimized
          />
        </Box>
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
            background="cardBackground"
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
                <PostImage
                  imageUrl={imageUrl}
                  dialogMaxH={dialogMaxH}
                  aspectRatio={aspectRatio}
                  imageMaxHeight={imageMaxHeight}
                  imageMaxWidth={imageMaxWidth}
                />

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
                  background={{ base: "transparent", md: "cardBackground" }}
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
                    background="colorGrayWhite"
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
                    insetY={{ mdDown: 6, smDown: 0 }}
                    insetX={{ mdDown: 6, smDown: 0 }}
                    zIndex={{ mdDown: 10 }}
                    position={{ mdDown: "fixed" }}
                    background={{ mdDown: "cardBackground" }}
                    paddingBottom={"16px"}
                  >
                    {/* Коментарии  */}
                    <PostComments />
                  </Box>

                  <Separator
                    display={{
                      base: "none",
                      md: "flex",
                    }}
                    marginBottom="12px"
                    background="colorGrayWhite"
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
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="7px"
                      cursor={"pointer"}
                    >
                      <Heart width={28} height={28} />
                      <Text as="p" textStyle="md">
                        {likesCount} Лайк(ов)
                      </Text>
                    </Box>

                    <Box
                      onClick={toggleComments}
                      display={{ base: "flex" }}
                      alignItems="center"
                      gap="7px"
                      cursor={"pointer"}
                    >
                      <MessageSquareText width={28} height={28} />
                      <Text as="p" textStyle="md">
                        {likesCount}
                      </Text>
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
                background={{ mdDown: "cardBackground" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
