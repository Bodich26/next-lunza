import * as z from "zod";

export const nameSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Минимум 3 символа",
    })
    .regex(/^[A-Za-z0-9]+$/, {
      message: "Только латинские буквы и цифры",
    }),
});

export type NameFormData = z.infer<typeof nameSchema>;
