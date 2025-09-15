"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PasswordInput } from "@/shared";
import {
  Button,
  Field,
  Flex,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { TitlesForm } from "./titles-form";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const loginUserForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Flex gap={"5"} flexDirection={"column"} className="max-w-[487px]">
      <TitlesForm
        titles={"Вход в аккаунт"}
        text={"Твое новое пространство для общения и вдохновения"}
      />
      <form onSubmit={onSubmit}>
        <Stack
          gap="4"
          align="flex-start"
          padding={"10"}
          border={"solid"}
          borderWidth={"thin"}
          rounded={"md"}
          width={"full"}
          borderColor={"borderColors"}
          background={"backgroundPrimary"}
        >
          {/* Email */}

          <Field.Root required invalid={!!errors.email}>
            <Field.Label>
              Почта <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={<IoIosMail />}>
              <Input
                type="email"
                {...register("email")}
                required
                placeholder="example@mail.com"
              />
            </InputGroup>

            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          {/* Password */}

          <Field.Root required invalid={!!errors.password}>
            <Field.Label>
              Пароль <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput
              type="password"
              {...register("password")}
              required
              placeholder="********"
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>
          <Link fontSize={14} marginLeft={"auto"} href="...">
            Забыл пароль?
          </Link>

          {/* Button */}

          <Button className="w-full" type="submit" colorPalette={"gray"}>
            Войти
          </Button>
          <Text textStyle="sm">
            Ещё нет аккаунта?{" "}
            <Link href="/register" color={"rose.700"}>
              [Зарегистрируйтесь]
            </Link>
          </Text>
        </Stack>
      </form>
    </Flex>
  );
};
