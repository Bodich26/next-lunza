"use client";
import React from "react";
import { UserAbout } from "@/entities/user";
import { Box } from "@chakra-ui/react";
import { PencilButton, profileAboutHint, useClickOutside } from "@/shared";
import { NewAboutForm } from "./new-about-form";

type Props = {
  about: string;
};

export const EditingAbout = ({ about }: Props) => {
  const [isEditingAbout, setIsEditingAbout] = React.useState<boolean>(false);
  const [newAbout, setNewAbout] = React.useState<string>(about);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, {
    enabled: isEditingAbout,
    onOutsideClick: () => {
      setIsEditingAbout(false);
      setNewAbout(about);
    },
  });

  return (
    <Box display={"flex"} alignItems={"center"} gap={3} ref={containerRef}>
      {!isEditingAbout ? (
        <>
          <UserAbout text={about || profileAboutHint} />
          <PencilButton onClick={() => setIsEditingAbout(true)} />
        </>
      ) : (
        <>
          <NewAboutForm
            value={newAbout}
            onChange={setNewAbout}
            closeForm={() => setIsEditingAbout(false)}
          />
        </>
      )}
    </Box>
  );
};
