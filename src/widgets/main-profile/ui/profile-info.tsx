import {
  CopyIdButton,
  UserAvatar,
  UserDataReg,
  UserDescription,
  UserName,
} from "@/entities/user";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  username: string;
  avatarUrl: string;
};

export const ProfileInfo = ({ username, avatarUrl }: Props) => {
  return (
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
          <UserAvatar altAvatar={"Profile Avatar"} urlAvatar={avatarUrl} />
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
            <UserName name={username} />
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
  );
};
