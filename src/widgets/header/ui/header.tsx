import { LogoutButton } from "@/features/auth";
import { ToggleSidebarButton } from "@/features/toggle-sidebar";
import { CustomIcon, Logo, widthContainer } from "@/shared";
import { CreateMenu } from "@/widgets/create-menu";
import { Box, Container, Separator } from "@chakra-ui/react";
import { Bell } from "lucide-react";
import { PUBLIC_ROUTES } from "routes";

export const Header = () => {
  return (
    <Box
      as={"header"}
      paddingY={2}
      background={"bg.card"}
      width={"full"}
      position={"fixed"}
      top="0"
      left="0"
      zIndex="10"
      className="max-[1530px]:pl-[50px]! max-md:pl-[0px]!"
    >
      <Container maxW={widthContainer}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/** Left*/}
          <Box display={"flex"} alignItems={"center"} gap={"4"}>
            <ToggleSidebarButton />
            {/** Logo*/}
            <Logo
              width={44}
              height={41}
              href={PUBLIC_ROUTES.MAIN}
              name="Lunza"
              alt={"Logo"}
              src={"/logo.svg"}
            />

            {/** Separator*/}
            <Separator
              background={"bg.subtle"}
              width={"0.5"}
              height={"40px"}
              rounded={"full"}
              display={{ base: "none", md: "inherit" }}
            />
          </Box>

          {/** Right*/}
          <Box display={"flex"} alignItems={"center"} gap={"4"}>
            {/** Button-Block*/}
            <Box display={"flex"} alignItems={"center"} gap={"3"}>
              <CreateMenu />

              <CustomIcon
                value={10}
                icon={Bell}
                iconHeight={26}
                iconWidth={26}
              />
            </Box>

            {/** Separator*/}
            <Separator
              background={"bg.subtle"}
              width={"0.5"}
              height={"40px"}
              rounded={"full"}
              display={{ base: "none", md: "inherit" }}
            />

            {/** Log-Out*/}
            <LogoutButton className={"block max-md:hidden"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
