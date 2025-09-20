"use client";
import {
  Button,
  Field,
  Flex,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { TitlesForm } from "./titles-form";
import { AuthRedirectForm } from "./auth-redirect-form";
import { useForgotPassword } from "../model/use-forgot-password";

export const ForgotPasswordFrom = () => {
  const { handleSubmitForm, emailErrors, register } = useForgotPassword();

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
          borderColor={"borderColors"}
          background={"backgroundPrimary"}
        >
          {/* Email */}

          <Field.Root required invalid={!!emailErrors.email}>
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

            <Field.ErrorText>{emailErrors.email?.message}</Field.ErrorText>
          </Field.Root>

          {/* Button */}

          <Button className="w-full" type="submit" colorPalette={"gray"}>
            Восстановить пароль
          </Button>
          <AuthRedirectForm
            text={"Хотите вернуться?"}
            linkText={"Войти"}
            href={"/login"}
          />
        </Stack>
      </form>
    </Flex>
  );
};
