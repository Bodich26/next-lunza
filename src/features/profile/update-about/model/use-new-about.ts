"use client";
import React from "react";
import { objectFormData, queryClient, toaster } from "@/shared";
import { updateAbout } from "../api/action";
import { profileQueryKeys, useMyProfileApi } from "@/entities/user";
import { AboutFormData, aboutSchema } from "./about-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useNewAbout = (closeForm: () => void) => {
  const { data: profile } = useMyProfileApi();
  const userId = profile!.id;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AboutFormData>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      about: "",
    },
  });

  const aboutNewErrors = errors.about;

  const handleSubmitForm = handleSubmit(async (data: AboutFormData) => {
    if (isLoading) return;
    setIsLoading(true);

    const res = await updateAbout(objectFormData(data), userId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Текст обновлен",
        description: "Новое описание успешно сохранено!",
        type: "success",
        closable: true,
      });

      closeForm();

      queryClient.invalidateQueries({
        queryKey: profileQueryKeys.myProfile,
      });
    }

    setIsLoading(false);
  });

  return {
    register,
    handleSubmitForm,
    aboutNewErrors,
    isLoading,
  };
};
