import { Box, chakra, Text } from "@chakra-ui/react";
import { Heart } from "lucide-react";

type Props = {
  isLiked: boolean;
  likeCount: number;
  onClick: () => void;
};

export const LikeIcon = ({ isLiked, likeCount, onClick }: Props) => {
  const HeartIcon = chakra(Heart);
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="7px"
      cursor={"pointer"}
      onClick={onClick}
    >
      <HeartIcon
        width={"28px"}
        height={"28px"}
        cursor="pointer"
        stroke={isLiked ? "accent.primary" : ""}
        fill={isLiked ? "accent.primary" : "transparent"}
        transition="all 0.3s ease-in-out"
      />

      {likeCount > 0 && (
        <Text as="p" textStyle="md">
          {likeCount}
        </Text>
      )}
    </Box>
  );
};
