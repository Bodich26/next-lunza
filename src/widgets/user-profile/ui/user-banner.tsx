import { Box, Image } from "@chakra-ui/react";

type Props = {
  altBanner: string;
  urlBanner: string;
};
export const UserBanner = ({ urlBanner, altBanner }: Props) => {
  return (
    <Box w={"full"} h={"192px"} position={"relative"}>
      <Image
        position={"absolute"}
        roundedTop="md"
        width={"full"}
        height={"192px"}
        objectFit={"cover"}
        src={urlBanner ?? "/default-banner-profile.jpg"}
        alt={altBanner ?? "Profile Banner"}
      />
    </Box>
  );
};
