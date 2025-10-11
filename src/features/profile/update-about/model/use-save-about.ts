"use client";
import React from "react";
import { toaster, useClickOutside } from "@/shared";
import { updateAbout } from "../api/action";

type Props = {
  about: string;
  userId: string;
};

export const useSaveAbout = ({ about, userId }: Props) => {
  const [isEditingText, setIsEditingText] = React.useState<boolean>(false);
  const [newText, setNewText] = React.useState<string>(about);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, {
    enabled: isEditingText,
    onOutsideClick: () => {
      setIsEditingText(false);
      setNewText(about);
    },
  });

  const handleSaveText = async () => {
    setIsEditingText(false);

    const res = await updateAbout(userId, newText);
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
        title: "Текст обновлен",
        description: "Новое описание успешно сохранено!",
        type: "success",
        closable: true,
      });
    }
  };
  return {
    handleSaveText,
    containerRef,
    isEditingText,
    setIsEditingText,
    newText,
    setNewText,
  };
};
