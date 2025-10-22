"use client";
import { UserName } from "@/entities/user";
import { Box } from "@chakra-ui/react";
import { NewNameForm } from "./new-name-form";
import React from "react";
import { PencilButton, useClickOutside } from "@/shared";

type Props = {
  username: string;
};

export const EditingName = ({ username }: Props) => {
  const [isEditingName, setIsEditingName] = React.useState<boolean>(false);
  const [newName, setNewName] = React.useState<string>(username);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, {
    enabled: isEditingName,
    onOutsideClick: () => {
      setIsEditingName(false);
      setNewName(username);
    },
  });

  return (
    <Box display={"flex"} alignItems={"center"} gap={3} ref={containerRef}>
      {!isEditingName ? (
        <>
          <UserName name={username || "Unknown"} />
          <PencilButton onClick={() => setIsEditingName(true)} />
        </>
      ) : (
        <>
          <NewNameForm value={newName} onChange={setNewName} />
        </>
      )}
    </Box>
  );
};
