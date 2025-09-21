"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { UpdateFormData, updatePasswordSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword } from "../api/actions";
import { ObjectFormData } from "@/shared";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "routes";

export const useUpdatePassword = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();

  const [resError, setResError] = React.useState<string>("");
  const [resSuccess, setResSuccess] = React.useState<string>("");
  const [redirectTimer, setRedirectTimer] =
    React.useState<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const passwordErrors = errors.password;

  const handleSubmitForm = handleSubmit(async (data: UpdateFormData) => {
    setIsLoading(true);
    if (!code) {
      setIsLoading(false);
      setResError("Код восстановления отсутствует");
      return;
    }

    const res = await updatePassword(ObjectFormData(data), code);

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
    passwordErrors,
    resError,
    resSuccess,
    isLoading,
  };
};
