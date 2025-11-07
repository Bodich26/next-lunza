import { Box } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  dialogMaxH: string;
  aspectRatio: number;
  imageMaxHeight: string;
  imageMaxWidth: string;
};

export const PostImage = ({
  imageUrl,
  imageMaxWidth,
  imageMaxHeight,
  aspectRatio,
  dialogMaxH,
}: Props) => {
  return (
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
  );
};
