"use client";
import { PostItem } from "@/entities/posts";
import { cn } from "@/shared";

export const ProfileListPosts = ({
  posts = [
    {
      id: "1",
      imageUrl: "/avatar.jpg",
      postText: "Мяууу.. я вообще в шоке, вы знаете где я побывал?",
      likesCount: 11,
      imageWidth: 736,
      imageHeight: 831,
    },
    {
      id: "2",
      imageUrl: "/default-banner-profile.jpg",
      postText: "Мяууу.. я вообще в шоке, вы знаете где я побывал?",
      likesCount: 12,
      imageWidth: 1920,
      imageHeight: 1080,
    },
    {
      id: "3",
      imageUrl: "/bg-auth-lunza.jpeg",
      postText: "Мяууу.. я вообще в шоке, вы знаете где я побывал?",
      likesCount: 12,
      imageWidth: 1920,
      imageHeight: 1080,
    },
  ],
}) => {
  const isCompact = posts.length <= 3;

  return (
    <section
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
          imageUrl={p.imageUrl}
          postText={p.postText}
          likesCount={p.likesCount}
          imageWidth={p.imageWidth}
          imageHeight={p.imageHeight}
        />
      ))}
    </section>
  );
};
