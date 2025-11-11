import { maxFileSize } from "@/shared";
import * as z from "zod";

export const postSchema = z.object({
  file: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
      message: "Пожалуйста, добавьте изображение",
    })
    .refine((files) => files[0]?.type.startsWith("image/"), {
      message: "Допустимы только изображения",
    })
    .refine((files) => files[0]?.size <= maxFileSize, {
      message: "Размер файла не должен превышать 1 МБ",
    }),

  description: z.string().max(256, {
    message: "Максимум 256 символов",
  }),
});

export type PostFormData = z.infer<typeof postSchema>;
