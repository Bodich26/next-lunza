"use client";
import { Button, Field, Flex, Stack } from "@chakra-ui/react";
import { TitlesForm } from "./titles-form";
import { AuthRedirectForm } from "./auth-redirect-form";
import { PasswordInput } from "@/shared";
import { useUpdatePassword } from "../model/use-update-password";

export const UpdatePasswordForm = () => {
  const { handleSubmitForm, passwordErrors, register } = useUpdatePassword();

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
          {/* Password */}

          <Field.Root required invalid={!!passwordErrors.password}>
            <Field.Label>
              Пароль <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput
              type="password"
              {...register("password")}
              required
              placeholder="********"
            />
            <Field.ErrorText>
              {passwordErrors.password?.message}
            </Field.ErrorText>
          </Field.Root>

          {/* Button */}

          <Button className="w-full" type="submit" colorPalette={"gray"}>
            Обновить пароль
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
