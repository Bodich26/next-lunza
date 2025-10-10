import { PencilButton } from "@/shared";
import { Box } from "@chakra-ui/react";

type Props = {
  userId: string;
};

export const UpdateAvatarButton = ({ userId }: Props) => {
  return (
    <Box position={"absolute"} right={"8px"} bottom={"10px"}>
      <PencilButton onClick={() => console.log(userId)} />
    </Box>
  );
};
