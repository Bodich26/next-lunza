import { UpdateBannerButton } from "@/features/profile/update-banner";
import { Box, Flex, Image } from "@chakra-ui/react";

type Props = {
  altBanner: string;
  urlBanner: string;
};
export const ProfileBanner = ({ urlBanner, altBanner }: Props) => {
  return (
    <Box w={"full"} h={"192px"} position={"relative"}>
      {/* Баннер */}
      <Image
        position={"absolute"}
        roundedTop="md"
        width={"full"}
        height={"192px"}
        objectFit={"cover"}
        src={urlBanner ?? "/default-banner-profile.jpg"}
        alt={altBanner ?? "Profile Banner"}
      />
      <Flex
        justifyContent={"end"}
        padding={4}
        position="absolute"
        top={0}
        right={0}
        zIndex={1}
      >
        {/* Кнопка изменения баннера */}
        <UpdateBannerButton />
      </Flex>
    </Box>
  );
};
