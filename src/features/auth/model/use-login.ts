"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { objectFormData, queryClient, useRedirectTimer } from "@/shared";
import { signIn } from "../api/actions";
import { AUTH_META } from "routes";

export const useLogin = () => {
  const [resError, setResError] = React.useState<string>("");
  const [resSuccess, setResSuccess] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { startRedirect } = useRedirectTimer(
    AUTH_META.AFTER_LOGIN_REDIRECT,
    1000
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const emailErrors = errors.email;
  const passwordErrors = errors.password;

  const handleSubmitForm = handleSubmit(async (data: LoginFormData) => {
    setIsLoading(true);
    const res = await signIn(objectFormData(data));

    if (res.error) {
      setResError(res.error);
      setIsLoading(false);
      return;
    }

    if (res.success) {
      queryClient.clear();
      setResSuccess(res.success);
      startRedirect();
    }
  });

  return {
    register,
    handleSubmitForm,
    emailErrors,
    passwordErrors,
    resError,
    resSuccess,
    isLoading,
  };
};
