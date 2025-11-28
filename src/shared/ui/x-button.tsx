import { Box } from "@chakra-ui/react";
import { X } from "lucide-react";

type Props = {
  onClick?: () => void;
};

export const XButton = ({ onClick }: Props) => {
  return (
    <Box onClick={onClick}>
      <X width={24} height={24} cursor={"pointer"} />
    </Box>
  );
};
