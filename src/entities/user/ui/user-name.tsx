import { Heading } from "@chakra-ui/react";

type Props = {
  name: string;
};
export const UserName = ({ name }: Props) => {
  return (
    <Heading as={"h3"} color={"textPrimary"} fontWeight={"medium"} size={"3xl"}>
      {name}
    </Heading>
  );
};
