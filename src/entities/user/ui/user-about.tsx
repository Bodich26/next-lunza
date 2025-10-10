import { Text } from "@chakra-ui/react";

type Props = {
  text: string;
};
export const UserAbout = ({ text }: Props) => {
  return (
    <Text as={"p"} color={"textPrimary"} fontSize={"md"} fontWeight={"normal"}>
      {text}
    </Text>
  );
};
