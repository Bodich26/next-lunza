"use client";
import { UserAbout } from "@/entities/user";
import { Box } from "@chakra-ui/react";
import { useSaveAbout } from "../model/use-save-about";
import { EditingAboutButton } from "./editing-about-button";
import { InputAbout } from "./input-about";
import { SaveAboutButton } from "./save-about-button";
import { profileAboutHint } from "@/shared";

type Props = {
  about: string;
  userId: string;
};

export const EditingAbout = ({ about, userId }: Props) => {
  const utils = useSaveAbout({ about, userId });

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={3}
      ref={utils.containerRef}
    >
      {!utils.isEditingText ? (
        <>
          <UserAbout text={about || profileAboutHint} />
          <EditingAboutButton onClick={() => utils.setIsEditingText(true)} />
        </>
      ) : (
        <>
          <InputAbout value={utils.newText} onChange={utils.setNewText} />
          <SaveAboutButton onClick={utils.handleSaveText} />
        </>
      )}
    </Box>
  );
};
