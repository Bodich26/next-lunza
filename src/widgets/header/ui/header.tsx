import { LogoutButton } from "@/features/auth";
import { CustomIcon, Logo } from "@/shared";
import { Box, Button, Container, Separator } from "@chakra-ui/react";
import { Bell } from "lucide-react";
import { BiPlus } from "react-icons/bi";
import { PUBLIC_URL_MAIN } from "routes";

export const Header = () => {
  return (
    <Box as={"header"} paddingY={2} background={"cardBackground"}>
      <Container maxW={"1360px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/** Left*/}
          <Box display={"flex"} alignItems={"center"} gap={"4"}>
            {/** Logo*/}
            <Logo
              width={186}
              height={41}
              href={PUBLIC_URL_MAIN}
              alt={"Logo"}
              src={"/logo-full.svg"}
            />

            {/** Separator*/}
            <Separator
              background={"colorGrayWhite"}
              width={"0.5"}
              height={42}
              rounded={"full"}
            />
          </Box>

          {/** Right*/}
          <Box display={"flex"} alignItems={"center"} gap={"4"}>
            {/** Button-Block*/}
            <Box display={"flex"} alignItems={"center"} gap={"3"}>
              <Button
                variant="solid"
                background={"rose.700"}
                _active={{ background: "rose.800" }}
                _hover={{ background: "rose.800" }}
              >
                Создать <BiPlus />
              </Button>

              <CustomIcon value={0} icon={Bell} />
            </Box>

            {/** Separator*/}
            <Separator
              background={"colorGrayWhite"}
              width={"0.5"}
              height={42}
              rounded={"full"}
            />

            {/** Log-Out*/}
            <LogoutButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
