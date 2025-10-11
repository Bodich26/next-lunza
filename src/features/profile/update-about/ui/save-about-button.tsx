import { Box } from "@chakra-ui/react";
import { SquareCheck } from "lucide-react";

type Props = {
  onClick: () => void;
};
export const SaveAboutButton = ({ onClick }: Props) => {
  return (
    <Box>
      <SquareCheck
        onClick={onClick}
        width={24}
        height={24}
        cursor={"pointer"}
      />
    </Box>
  );
};
