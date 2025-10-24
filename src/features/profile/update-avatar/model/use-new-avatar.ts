"use client";
import { useMyProfileApi } from "@/entities/user";
import { toaster } from "@/shared";
import React from "react";
import { updateAvatar } from "../api/action";

export const useNewAvatar = () => {
  const { data: profile } = useMyProfileApi();
  const userId = profile!.id;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleFileChange = async (files: FileList | null) => {
    if (isLoading) return;
    setIsLoading(true);

    if (!files?.[0]) {
      setIsLoading(false);
      return;
    }

    const file = files[0];
    const res = await updateAvatar(file, userId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Аватар обновлен",
        description: "Новая аватарка успешно сохранена!",
        type: "success",
        closable: true,
      });
    }

    setIsLoading(false);
  };

  return { handleFileChange, isLoading };
};
