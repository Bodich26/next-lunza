"use client";

import { NoticeForm, PasswordInput } from "@/shared";
import {
  Button,
  Field,
  Flex,
  Input,
  InputGroup,
  Link,
  Stack,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { TitlesForm } from "./titles-form";
import { AuthRedirectForm } from "./auth-redirect-form";

import { useLogin } from "../model/use-login";

export const LoginForm = () => {
  const {
    register,
    handleSubmitForm,
    emailErrors,
    passwordErrors,
    isLoading,
    resSuccess,
    resError,
  } = useLogin();

  return (
    <Flex gap={"5"} flexDirection={"column"} className="max-w-[487px]">
      <TitlesForm
        titles={"Вход в аккаунт"}
        text={"Твое новое пространство для общения и вдохновения"}
      />
      <form onSubmit={handleSubmitForm}>
        <Stack
          gap="4"
          align="flex-start"
          padding={"10"}
          border={"solid"}
          borderWidth={"thin"}
          rounded={"md"}
          width={"full"}
          borderColor={"border.default"}
          background={"bg.app"}
        >
          {/* Email */}

          <Field.Root required invalid={!!emailErrors}>
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

            <Field.ErrorText>{emailErrors?.message}</Field.ErrorText>
          </Field.Root>

          {/* Password */}

          <Field.Root required invalid={!!passwordErrors}>
            <Field.Label>
              Пароль <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput
              type="password"
              {...register("password")}
              required
              placeholder="********"
            />
            <Field.ErrorText>{passwordErrors?.message}</Field.ErrorText>
          </Field.Root>
          <Link fontSize={14} marginLeft={"auto"} href="/forgot-password">
            Забыли пароль?
          </Link>

          {/*Notice*/}
          <NoticeForm success={resSuccess} error={resError} />

          {/* Button */}

          <Button
            className="w-full"
            type="submit"
            loading={isLoading}
            background={"accent.primary"}
            color={"text.white"}
            rounded={"md"}
            _active={{ background: "rose.800" }}
            _hover={{ background: "rose.800" }}
          >
            Войти
          </Button>
          <AuthRedirectForm
            text={"Ещё нет аккаунта?"}
            linkText={"Зарегистрируйтесь"}
            href={"/register"}
          />
        </Stack>
      </form>
    </Flex>
  );
};
