"use client";

import { useForm } from "react-hook-form";
import { UpdateFormData, updatePasswordSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUpdatePassword = () => {
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
  const passwordErrors = errors;

  const handleSubmitForm = handleSubmit(async (data: UpdateFormData) => {
    // return signIn(ObjectFormData(data));
  });
  return { register, handleSubmitForm, passwordErrors };
};
