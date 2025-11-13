"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormData, postSchema } from "./post-schema";
import { useMyProfileApi } from "@/entities/user";
import { createPost } from "../api/action";

export const useCreatePost = () => {
  const [resError, setResError] = React.useState<string>("");
  const [resSuccess, setResSuccess] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { data: profile } = useMyProfileApi();
  const userId = profile!.id;

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
    if (isLoading) return;
    setIsLoading(false);

    if (!data.file?.[0]) {
      setIsLoading(false);
      return;
    }

    const file = data.file?.[0];
    const res = await createPost(file, data.description, userId);

    if (res.error) {
      setResError(res.error);
      setIsLoading(false);
      return;
    }
    if (res.success) {
      setResSuccess(res.success);
    }
  });

  return {
    fileErrors,
    descriptionErrors,
    handleSubmitForm,
    register,
    isLoading,
    resSuccess,
    resError,
  };
};
