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
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { TitlesForm } from "./titles-form";
import { IoIosMail } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";

interface FormValues {
  email: string;
  password: string;
  nick: string;
}

export const RegisterForm = () => {
  const RegisterUserForm = useForm({
    defaultValues: {
      email: "",
      password: "",
      nick: "",
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
        titles={"Регистрация"}
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

          {/* Nick */}

          <Field.Root required invalid={!!errors.email}>
            <Field.Label>
              Псевдоним <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={<RiUser3Fill />}>
              <Input
                type="text"
                {...register("nick")}
                required
                placeholder="Введите псевдоним"
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
            <Field.HelperText>Минимум 8 символов</Field.HelperText>
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          {/* Rule */}
          <Checkbox.Root required variant={"solid"} value="accept rules">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize={"sm"}>
              Регистрируясь, вы соглашаетесь с{" "}
              <Link href="/login" color={"rose.700"} display={"inline"}>
                [Правилами сообщества]
              </Link>{" "}
              и{" "}
              <Link href="/login" color={"rose.700"} display={"inline"}>
                [Политикой конфиденциальности]
              </Link>
            </Checkbox.Label>
          </Checkbox.Root>

          {/* Button */}

          <Button className="w-full" type="submit" colorPalette={"gray"}>
            Создать Аккаунт
          </Button>
          <Text textStyle="sm">
            Уже есть аккаунт?{" "}
            <Link href="/login" color={"rose.700"}>
              [Войти]
            </Link>
          </Text>
        </Stack>
      </form>
    </Flex>
  );
};
