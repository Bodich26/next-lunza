"use client";
import { profileQueryKeys, useMyProfileApi } from "@/entities/user";
import { maxFileSize, queryClient, toaster } from "@/shared";
import React from "react";
import { updateBanner } from "../api/action";

export const useNewBanner = () => {
  const { data: profile } = useMyProfileApi();
  const userId = profile?.id;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleFileChange = async (files: FileList | null) => {
    if (isLoading) return;
    setIsLoading(true);

    if (!files?.[0]) {
      setIsLoading(false);
      return;
    }

    const file = files[0];
    if (file.size > maxFileSize) {
      toaster.create({
        title: "Ошибка",
        description:
          "Размер файла превышает 1 МБ. Выберите изображение поменьше.",
        type: "error",
        closable: true,
      });
      setIsLoading(false);
      return;
    }

    const res = await updateBanner(file, userId!);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Баннер обновлен",
        description: "Новый баннер успешно сохранен!",
        type: "success",
        closable: true,
      });

      queryClient.invalidateQueries({
        queryKey: profileQueryKeys.myProfile,
      });
    }

    setIsLoading(false);
  };

  return { handleFileChange, isLoading };
};
