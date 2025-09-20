"use client";

import { Button } from "@chakra-ui/react";
import { signOut } from "../api/actions";

export const LogoutButton = () => {
  const handleLogout = async () => await signOut();

  return (
    <Button onClick={handleLogout} colorPalette={"gray"}>
      Exit
    </Button>
  );
};
