import { Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { PUBLIC_ROUTES } from "routes";

type Props = {
  urlAvatar: string;
  userName: string;
};

export const IconAvatar = ({ urlAvatar, userName }: Props) => {
  return (
    <Link href={PUBLIC_ROUTES.PROFILE} className=" inline-flex w-[44px]">
      <Avatar.Root as={"span"} w={"44px"} h={"44px"}>
        <Avatar.Fallback name={userName} />
        <Avatar.Image src={urlAvatar} alt="Avatar" />
      </Avatar.Root>
    </Link>
  );
};
