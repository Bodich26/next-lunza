"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormData, postSchema } from "./post-schema";
import { useMyProfileApi } from "@/entities/user";
import { createPost } from "../api/action";
import { toaster } from "@/shared";
import { useCreatePostDialogStore } from "./use-create-post-dialog-store";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "routes";

export const useCreatePost = () => {
  const [resError, setResError] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { data: profile } = useMyProfileApi();
  const userId = profile?.id;
  const { close: closeDialogWindow } = useCreatePostDialogStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      file: undefined,
      description: "",
    },
  });

  const fileErrors = errors.file;
  const descriptionErrors = errors.description;

  const handleSubmitForm = handleSubmit(async (data) => {
    setIsLoading(true);

    if (!data.file?.[0]) {
      setIsLoading(false);
      return;
    }

    const file = data.file?.[0];
    const res = await createPost(file, data.description, userId!);

    if (res.error) {
      setResError(res.error);
    }

    if (res.success) {
      closeDialogWindow();
      toaster.create({
        title: "Новая публикация",
        description: "Новая публикация добавлена успешно",
        type: "success",
        closable: true,
      });

      router.push(PUBLIC_ROUTES.PROFILE);
    }

    setIsLoading(false);
  });

  return {
    fileErrors,
    descriptionErrors,
    handleSubmitForm,
    register,
    isLoading,
    resError,
  };
};
