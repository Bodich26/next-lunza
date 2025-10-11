import { PencilButton } from "@/shared";
import { Box } from "@chakra-ui/react";

type Props = {
  userId: string;
};

export const UpdateAvatarButton = ({ userId }: Props) => {
  return (
    <Box
      position={"absolute"}
      right={{ base: "-5px", smPlusDown: "5px" }}
      bottom={{ base: "5px", smPlusDown: "12px" }}
    >
      <PencilButton onClick={() => console.log(userId)} />
    </Box>
  );
};
