import {
  CopyIdButton,
  UserAbout,
  UserAvatar,
  UserDataReg,
  UserName,
} from "@/entities/user";
import { formatDate } from "@/shared";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  username: string;
  avatarUrl: string;
  avatarAlt: string;
  about: string;
  date: string;
};

export const UserInfo = ({
  username,
  avatarUrl,
  avatarAlt,
  about,
  date,
}: Props) => {
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
      minHeight={"154px"}
    >
      <Box
        w={"1060px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {/* Аватарка */}
        <Box
          position="absolute"
          bottom={"0"}
          h={"176px"}
          top={{ base: "-40px", mdDown: "-110px" }}
          left={{ mdDown: "50%" }}
          transform={{ mdDown: "translateX(-50%)" }}
          zIndex={2}
          margin={{ smPlusDown: "0 auto" }}
        >
          <UserAvatar
            altAvatar={avatarAlt}
            urlAvatar={avatarUrl}
            size="md"
            isOwner={false}
          />
        </Box>

        {/* Контент справа */}
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={7}
          w={"full"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", smPlus: "row" }}
          marginLeft={{ base: "0px", md: "200px" }}
          marginTop={{ base: "70px", md: "10px" }}
        >
          {/** User Info*/}

          <Flex
            flexDirection={"column"}
            gap={"8px"}
            width={{ base: "54%", smPlusDown: "100%" }}
          >
            <UserName name={username} />
            {about && <UserAbout text={about} />}
            <UserDataReg date={formatDate(date) || "Ошибка даты"} />
          </Flex>

          {/* Кнопка */}
          <CopyIdButton />
        </Box>
      </Box>
    </Box>
  );
};
