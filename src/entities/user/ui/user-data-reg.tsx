import { Text } from "@chakra-ui/react";

type Props = {
  data: string;
};
export const UserDataReg = ({ data }: Props) => {
  return (
    <Text
      as={"span"}
      color={"textPrimary"}
      fontSize={"md"}
      opacity={"40%"}
      fontWeight={"normal"}
    >
      Дата регистрации: {data}
    </Text>
  );
};
