import { CopyIdButton, UserAvatar, UserDataReg } from "@/entities/user";
import { EditingAbout } from "@/features/profile/update-about";
import { EditingName } from "@/features/profile/update-name";
import { formatDate } from "@/shared";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  username: string;
  avatarUrl: string;
  avatarAlt: string;
  about: string;
  date: string;
  userId: string;
};

export const ProfileInfo = ({
  username,
  avatarUrl,
  avatarAlt,
  about,
  date,
  userId,
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
          bottom={"0"}
          h={"176px"}
          top={{ base: "none", mdDown: "-110px" }}
          left={{ mdDown: "50%" }}
          transform={{ mdDown: "translateX(-50%)" }}
          zIndex={2}
          margin={{ smPlusDown: "0 auto" }}
        >
          <UserAvatar
            altAvatar={avatarAlt}
            urlAvatar={avatarUrl}
            size="md"
            isOwner={true}
            userId={userId}
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
          marginTop={{ base: "70px", md: "10px" }}
        >
          {/** User Info*/}

          <Flex
            flexDirection={"column"}
            gap={"8px"}
            width={{ base: "60%", smPlusDown: "100%" }}
          >
            <EditingName username={username} />
            <EditingAbout about={about} userId={userId} />
            <UserDataReg date={formatDate(date) || "Ошибка даты"} />
          </Flex>

          {/* Кнопка */}
          <CopyIdButton />
        </Box>
      </Box>
    </Box>
  );
};
