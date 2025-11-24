"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  onClick: () => void;
};

export const PostCard = ({ imageUrl, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      borderColor={"bg.card"}
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
  );
};
