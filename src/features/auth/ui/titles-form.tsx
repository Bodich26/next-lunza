import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  titles: string;
  text: string;
};
export const TitlesForm = ({ titles, text }: Props) => {
  return (
    <Flex gap={"3"} justifyContent={"center"} alignItems={"center"}>
      <Image
        src={"/logo.svg"}
        alt={"Logo Lunza"}
        width={69}
        height={64}
        className="max-[375px]:w-[60px]"
      />
      <Box>
        <Heading as={"h3"} size={{ base: "2xl", xs: "3xl", sm: "4xl" }}>
          {titles}
        </Heading>
        <Text as={"p"} fontSize={{ base: "md", sm: "lg" }}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};
