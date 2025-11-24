"use client";
import { TypeUserPosts } from "@/entities/posts/model/type-user-posts";
import { cn } from "@/shared";
import { PostItem } from "@/widgets/post-item";

type Props = { posts: TypeUserPosts[] };

export const ProfileListPosts = ({ posts }: Props) => {
  const isCompact = posts.length <= 3;

  return (
    <div
      className={cn(
        "grid gap-6 mt-6 max-sm:grid-cols-[repeat(auto-fit,minmax(260px,2fr))]",
        isCompact
          ? "grid-cols-[repeat(auto-fit,minmax(260px,322px))] justify-start max-[1128px]:grid-cols-[repeat(auto-fit,minmax(260px,2fr))]"
          : "grid-cols-[repeat(auto-fit,minmax(260px,1fr))] justify-center max-w-[100%] mx-auto"
      )}
    >
      {posts.map((p) => (
        <PostItem
          key={p.id}
          id={p.id}
          imageUrl={p.image_url}
          postText={p.description}
          likesCount={11}
          imageWidth={p.image_width}
          imageHeight={p.image_height}
        />
      ))}
    </div>
  );
};
