"use client";
import { signUp } from "../api/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ObjectFormData, PasswordInput } from "@/shared";
import {
  Button,
  Field,
  Flex,
  Input,
  InputGroup,
  Link,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { TitlesForm } from "./titles-form";
import { IoIosMail } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { AuthRedirectForm } from "./auth-redirect-form";
import { RegisterFormData, registerSchema } from "../model/auth-schema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    return signUp(ObjectFormData(data));
  };

  return (
    <Flex gap={"5"} flexDirection={"column"} className="max-w-[487px]">
      <TitlesForm
        titles={"Регистрация"}
        text={"Твое новое пространство для общения и вдохновения"}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <Field.Root required invalid={!!errors.name}>
            <Field.Label>
              Псевдоним <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={<RiUser3Fill />}>
              <Input
                type="text"
                {...register("name")}
                required
                placeholder="Введите псевдоним"
              />
            </InputGroup>

            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
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
            {errors.password ? (
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            ) : (
              <Field.HelperText>Минимум 8 символов</Field.HelperText>
            )}
          </Field.Root>

          {/* Rule */}

          <Checkbox.Root variant={"solid"} required>
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
          <AuthRedirectForm
            text={"Уже есть аккаунт?"}
            linkText={"Войти"}
            href={"/login"}
          />
        </Stack>
      </form>
    </Flex>
  );
};
