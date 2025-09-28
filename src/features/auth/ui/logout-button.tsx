"use client";

import { signOut } from "../api/actions";
import { CustomIcon } from "@/shared";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  const handleLogout = async () => await signOut();

  return (
    <CustomIcon
      icon={LogOut}
      onClick={handleLogout}
      iconHeight={26}
      iconWidth={26}
    />
  );
};
