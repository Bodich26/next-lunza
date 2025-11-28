import { maxFileSize, maxWidthFile, maxHightFile } from "@/shared";
import * as z from "zod";

export const postSchema = z.object({
  file: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
      message: "Пожалуйста, добавьте изображение.",
    })
    .refine((files) => files[0]?.type.startsWith("image/"), {
      message: "Допустимы только файлы изображений.",
    })
    .refine((files) => files[0]?.size <= maxFileSize, {
      message: "Размер файла не должен превышать 1 МБ.",
    })
    .refine(
      async (files) => {
        const file = files[0];
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);

        return new Promise<boolean>((resolve) => {
          img.onload = () => {
            URL.revokeObjectURL(objectUrl);
            resolve(img.width >= maxWidthFile && img.height >= maxHightFile);
          };
          img.onerror = () => resolve(false);
          img.src = objectUrl;
        });
      },
      {
        message: `Минимальный размер изображения — ${maxWidthFile}x${maxHightFile}px.`,
      }
    ),

  description: z.string().max(256, {
    message: "Максимум 256 символов.",
  }),
});

export type PostFormData = z.infer<typeof postSchema>;
