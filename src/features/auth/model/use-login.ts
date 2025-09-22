"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { objectFormData } from "@/shared";
import { signIn } from "../api/actions";
import { DEFAULT_LOGIN_REDIRECT } from "routes";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [resError, setResError] = React.useState<string>("");
  const [resSuccess, setResSuccess] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const [redirectTimer, setRedirectTimer] =
    React.useState<NodeJS.Timeout | null>(null);

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
      setResSuccess(res.success);
      const timer = setTimeout(() => {
        router.push(DEFAULT_LOGIN_REDIRECT);
      }, 1000);
      setRedirectTimer(timer);
    }
  });

  React.useEffect(() => {
    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
        setIsLoading(false);
      }
    };
  }, [redirectTimer]);

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
