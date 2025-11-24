import { Skeleton } from "@chakra-ui/react";

export const PostCommentsSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          rounded="md"
          width="full"
          height="100px"
          variant={"shine"}
          background={"bg.skeleton"}
        />
      ))}
    </div>
  );
};
