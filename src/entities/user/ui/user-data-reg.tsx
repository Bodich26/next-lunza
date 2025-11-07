import { Text } from "@chakra-ui/react";

type Props = {
  date: string;
};
export const UserDataReg = ({ date }: Props) => {
  return (
    <Text
      as={"span"}
      color={"text.primary"}
      fontSize={"md"}
      opacity={"40%"}
      fontWeight={"normal"}
    >
      Дата регистрации: {date}
    </Text>
  );
};
