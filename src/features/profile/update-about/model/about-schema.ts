import * as z from "zod";

export const aboutSchema = z.object({
  about: z.string().max(100, {
    message: "Максимум 100 символов",
  }),
});

export type AboutFormData = z.infer<typeof aboutSchema>;
