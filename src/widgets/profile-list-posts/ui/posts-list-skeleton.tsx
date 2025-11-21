import { Skeleton } from "@chakra-ui/react";

export const PostsListSkeleton = () => {
  return (
    <div className="grid gap-6 mt-6 max-sm:grid-cols-[repeat(auto-fit,minmax(260px,2fr))] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] justify-center max-w-[100%] mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          rounded="md"
          width="full"
          height="290px"
          variant={"shine"}
          background={"bg.skeleton"}
        />
      ))}
    </div>
  );
};
