import { PencilButton } from "@/shared";
import { Box, FileUpload } from "@chakra-ui/react";
import { useNewBanner } from "../model/use-new-banner";

export const UpdateBannerButton = () => {
  const { handleFileChange } = useNewBanner();
  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.HiddenInput
        onChange={(e) => handleFileChange(e.target.files!)}
      />
      <FileUpload.Trigger asChild>
        <Box
          position={"absolute"}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          right={{ base: "9px", smPlusDown: "12px" } as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          bottom={{ base: "5px", smPlusDown: "12px" } as any}
        >
          <PencilButton />
        </Box>
      </FileUpload.Trigger>
    </FileUpload.Root>
  );
};
