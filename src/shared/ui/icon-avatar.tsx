import { Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { PUBLIC_URL_PROFILE } from "routes";

export const IconAvatar = () => {
  return (
    <Link href={PUBLIC_URL_PROFILE} className=" inline-flex w-[44px]">
      <Avatar.Root as={"span"} w={"44px"} h={"44px"}>
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
    </Link>
  );
};
