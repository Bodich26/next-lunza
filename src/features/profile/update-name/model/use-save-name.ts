"use client";
import React from "react";
import { toaster, useClickOutside } from "@/shared";
import { updateName } from "../api/action";

type Props = {
  username: string;
  userId: string;
};

export const useSaveName = ({ username, userId }: Props) => {
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

  const handleSaveName = async () => {
    setIsEditingName(false);

    const res = await updateName(userId, newName);
    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    }
    if (res.success) {
      toaster.create({
        title: "Имя обновлено",
        description: "Новое имя успешно сохранено!",
        type: "success",
        closable: true,
      });
    }
  };
  return {
    handleSaveName,
    containerRef,
    isEditingName,
    setIsEditingName,
    newName,
    setNewName,
  };
};
