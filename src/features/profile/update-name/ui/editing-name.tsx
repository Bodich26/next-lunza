"use client";
import { UserName } from "@/entities/user";
import { Box } from "@chakra-ui/react";
import { InputName } from "./input-name";
import { EditingNameButton } from "./editing-name-button";
import { SaveNameButton } from "./save-name-button";
import { useSaveName } from "../model/use-save-name";

type Props = {
  username: string;
  userId: string;
};

export const EditingName = ({ username, userId }: Props) => {
  const utils = useSaveName({ username, userId });

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={3}
      ref={utils.containerRef}
    >
      {!utils.isEditingName ? (
        <>
          <UserName name={username || "Unknown"} />
          <EditingNameButton onClick={() => utils.setIsEditingName(true)} />
        </>
      ) : (
        <>
          <InputName value={utils.newName} onChange={utils.setNewName} />
          <SaveNameButton onClick={utils.handleSaveName} />
        </>
      )}
    </Box>
  );
};
