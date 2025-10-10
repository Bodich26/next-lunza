import { Box } from "@chakra-ui/react";
import { Pencil } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const PencilButton = ({ onClick }: Props) => {
  return (
    <Box onClick={onClick}>
      <Pencil width={24} height={24} cursor={"pointer"} />
    </Box>
  );
};
