import { Button } from "@chakra-ui/react";
import { Image as ImageIcon } from "lucide-react";
import { useCreatePostDialogStore } from "../model/use-create-post-dialog-store";

export const CreatePostButton = () => {
  const open = useCreatePostDialogStore((state) => state.open);

  return (
    <Button
      w={"full"}
      onClick={open}
      variant={"ghost"}
      _hover={{ background: "bg.muted" }}
    >
      <ImageIcon width={24} height={24} />
      Добавить публикацию
    </Button>
  );
};
