import { PencilButton } from "@/shared";
import { Box, FileUpload } from "@chakra-ui/react";
import { useNewAvatar } from "../model/use-new-avatar";

export const UpdateAvatarButton = () => {
  const { handleFileChange } = useNewAvatar();
  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.HiddenInput
        onChange={(e) => handleFileChange(e.target.files!)}
      />
      <FileUpload.Trigger asChild>
        <Box
          position={"absolute"}
          right={{ base: "9px", smPlusDown: "12px" }}
          bottom={{ base: "5px", smPlusDown: "12px" }}
        >
          <PencilButton />
        </Box>
      </FileUpload.Trigger>
    </FileUpload.Root>
  );
};
