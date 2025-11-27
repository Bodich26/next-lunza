"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { objectFormData, queryClient } from "@/shared";
import {
  CreateCommentFormData,
  createCommentSchema,
} from "./create-comment-schema";
import { createComment } from "../api/action";
import { commentsQueryKeys } from "@/entities/comments";

export const useCreateComment = (postId: number) => {
  const [resError, setResError] = React.useState<string>("");
  const [resSuccess, setResSuccess] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCommentFormData>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      commentText: "",
    },
  });
  const commentTextError = errors.commentText;

  const handleSubmitForm = handleSubmit(async (data: CreateCommentFormData) => {
    if (isLoading) return;
    setIsLoading(true);

    if (!postId) {
      setResError("Id публикации непередан");
      return;
    }

    const res = await createComment(objectFormData(data), postId);

    if (res.error) {
      setResError(res.error);
      setIsLoading(false);
      return;
    }

    if (res.success) {
      setIsLoading(false);
      reset();

      queryClient.invalidateQueries({
        queryKey: commentsQueryKeys.comments(postId),
      });
    }
  });
  return {
    register,
    handleSubmitForm,
    commentTextError,
    resError,
    resSuccess,
    isLoading,
  };
};
