import { UpdateAvatarButton } from "@/features/profile/update-avatar";
import { Image } from "@chakra-ui/react";

type Props = {
  altAvatar: string;
  urlAvatar: string;
  isOwner: boolean;
  size: "sm" | "md";
  userId?: string;
};

export const UserAvatar = ({
  urlAvatar,
  altAvatar,
  isOwner,
  size,
  userId,
}: Props) => {
  const sizes =
    size === "md"
      ? {
          w: { base: "176px", smPlusDown: "154px" },
          h: { base: "176px", smPlusDown: "154px" },
        }
      : {
          w: { base: "96px", smPlusDown: "84px" },
          h: { base: "96px", smPlusDown: "84px" },
        };

  return (
    <>
      <Image
        position={"relative"}
        width={sizes.w}
        height={sizes.h}
        rounded={"full"}
        objectFit={"cover"}
        src={urlAvatar ?? "/user_default_avatar.svg"}
        alt={altAvatar ?? "Profile Avatar"}
        borderColor={"cardBackground"}
        margin={{ smPlusDown: "0 auto" }}
        className="border-[5px] border-solid shadow-black"
        transition="filter 0.3s ease"
      />
      {isOwner && <UpdateAvatarButton userId={userId!} />}
    </>
  );
};
