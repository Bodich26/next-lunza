"use client";
import React from "react";
import { LikeIcon, useLikesQuery } from "@/entities/likes";
import { useToggleLike } from "../model/use-toggle-like";

type Props = {
  postId: number;
  isDialogOpen: boolean;
};

export const ToggleLikePost = ({ postId, isDialogOpen }: Props) => {
  const { data: likes } = useLikesQuery(postId, isDialogOpen);
  const { handleToggle } = useToggleLike();

  const isLiked = likes?.isLike ?? false;
  const likeCount = likes?.postLikes?.length ?? 0;

  return (
    <LikeIcon
      onClick={() => handleToggle(postId)}
      isLiked={isLiked}
      likeCount={likeCount}
    />
  );
};
