import { Image } from "@chakra-ui/react";

type Props = {
  altAvatar: string;
  urlAvatar: string;
};
export const UserAvatar = ({ urlAvatar, altAvatar }: Props) => {
  return (
    <Image
      width={"176px"}
      height={"176px"}
      rounded={"full"}
      objectFit={"cover"}
      src={urlAvatar}
      alt={altAvatar}
      borderColor={"cardBackground"}
      margin={{ smPlusDown: "0 auto" }}
      className="border-[5px] border-solid shadow-black"
    />
  );
};
