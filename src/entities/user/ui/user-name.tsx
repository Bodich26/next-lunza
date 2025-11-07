import { Heading } from "@chakra-ui/react";

type Props = {
  name: string;
};
export const UserName = ({ name }: Props) => {
  return (
    <Heading
      as={"h3"}
      color={"text.primary"}
      fontWeight={"medium"}
      size={{ base: "3xl", smDown: "2xl" }}
    >
      {name}
    </Heading>
  );
};
