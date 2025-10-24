"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { objectFormData, toaster } from "@/shared";
import { NameFormData, nameSchema } from "./name-schema";
import { updateName } from "../api/action";
import { useMyProfileApi } from "@/entities/user";

export const useNewName = () => {
  const { data: profile } = useMyProfileApi();
  const userId = profile!.id;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameFormData>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
    },
  });

  const nameNewErrors = errors.name;

  const handleSubmitForm = handleSubmit(async (data: NameFormData) => {
    if (isLoading) return;
    setIsLoading(true);

    const res = await updateName(objectFormData(data), userId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Имя обновлено",
        description: "Новое имя успешно сохранено!",
        type: "success",
        closable: true,
      });
    }

    setIsLoading(false);
  });

  return {
    register,
    handleSubmitForm,
    nameNewErrors,
    isLoading,
  };
};
