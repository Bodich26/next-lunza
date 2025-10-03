import { Box } from "@chakra-ui/react";
import { SquarePen } from "lucide-react";

export const UpdateBannerButton = () => {
  return (
    <Box
      w={"34px"}
      h={"34px"}
      display={"inline-flex"}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
      background={"white"}
      rounded={"md"}
    >
      <SquarePen width={24} height={24} color="black" />
    </Box>
  );
};
