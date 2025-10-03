import {
  CopyIdButton,
  UserAvatar,
  UserDataReg,
  UserDescription,
  UserName,
} from "@/entities/user";
import { UpdateBannerButton } from "@/features/profile/update-banner";
import { Box, Flex, Image } from "@chakra-ui/react";

export default async function Profile() {
  return (
    <>
      <Box w={"full"} h={"192px"} position={"relative"}>
        {/* Баннер */}
        <Image
          position={"absolute"}
          roundedTop="md"
          width={"full"}
          height={"192px"}
          objectFit={"cover"}
          src="/profile-banner.jpg"
          alt="Profile Banner"
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
      <Box
        width={"full"}
        position={"relative"}
        background={"cardBackground"}
        roundedBottom={"md"}
        paddingX={4}
        paddingBottom={4.5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={7}
      >
        <Box
          w={"960px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          position="relative"
        >
          {/* Аватарка */}
          <Box
            position="absolute"
            top={{ base: "-60px", mdDown: "-110px" }}
            left={{ mdDown: "50%" }}
            transform={{ mdDown: "translateX(-50%)" }}
            zIndex={2}
            width={{ smPlusDown: "100%" }}
            margin={{ smPlusDown: "0 auto" }}
          >
            <UserAvatar
              altAvatar={"Profile Avatar"}
              urlAvatar={"./avatar.jpg"}
            />
          </Box>

          {/* Контент справа */}
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={7}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", smPlus: "row" }}
            flexBasis={{ base: "100%", md: "80%" }}
            marginLeft={{ base: "0px", md: "200px" }}
            marginTop={{ base: "70px", md: "0px" }}
          >
            {/** User Info*/}

            <Flex flexDirection={"column"} gap={"8px"}>
              <UserName name="Эщькерешка" />
              <UserDescription
                text="Я люблю создавать, экспериментировать с идеями и постоянно
                развиваюсь, открывая новое и необычное."
              />
              <UserDataReg data="01.10.2025" />
            </Flex>

            {/* Кнопка */}
            <CopyIdButton />
          </Box>
        </Box>
      </Box>
    </>
  );
}
