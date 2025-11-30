"use client";
import React from "react";
import { commentsQueryKeys } from "@/entities/comments";
import { objectFormData, queryClient, toaster } from "@/shared";
import { updateComment } from "../api/action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateCommentFormData,
  updateCommentSchema,
} from "./update-comment-schema";

export const useUpdateComment = (
  closeForm: () => void,
  commentId: number,
  postId: number,
  editableText: string
) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCommentFormData>({
    resolver: zodResolver(updateCommentSchema),
    defaultValues: {
      commentText: editableText,
    },
  });

  const updateCommentErrors = errors.commentText;

  const handleSubmitForm = handleSubmit(async (data: UpdateCommentFormData) => {
    if (isLoading) return;
    setIsLoading(true);

    const res = await updateComment(objectFormData(data), commentId, postId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Успешно",
        description: "Ваш комментарий успешно обновлен.",
        type: "success",
        closable: true,
      });

      closeForm();

      queryClient.invalidateQueries({
        queryKey: commentsQueryKeys.comments(postId),
      });
    }
    setIsLoading(false);
  });
  return { register, handleSubmitForm, updateCommentErrors, isLoading };
};
