import { Button } from "@chakra-ui/react";
import { Image as ImageIcon } from "lucide-react";
export const CreatePostButton = () => {
  return (
    <Button w={"full"}>
      <ImageIcon width={24} height={24} />
      Добавить публикацию
    </Button>
  );
};
