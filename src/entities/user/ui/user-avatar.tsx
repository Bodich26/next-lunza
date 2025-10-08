import { Image } from "@chakra-ui/react";

type Props = {
  altAvatar: string;
  urlAvatar: string;
};
export const UserAvatar = ({ urlAvatar, altAvatar }: Props) => {
  return (
    <Image
      width={{ base: "176px", smPlusDown: "154px" }}
      height={{ base: "176px", smPlusDown: "154px" }}
      rounded={"full"}
      objectFit={"cover"}
      src={urlAvatar ?? "/user_default_avatar.svg"}
      alt={altAvatar ?? "Profile Avatar"}
      borderColor={"cardBackground"}
      margin={{ smPlusDown: "0 auto" }}
      className="border-[5px] border-solid shadow-black"
    />
  );
};
