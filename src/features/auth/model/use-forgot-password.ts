"use client";

import { useForm } from "react-hook-form";
import { ForgotFormData, forgotPasswordSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const emailErrors = errors;

  const handleSubmitForm = handleSubmit(async (data: ForgotFormData) => {
    // return signIn(ObjectFormData(data));
  });
  return { register, handleSubmitForm, emailErrors };
};
