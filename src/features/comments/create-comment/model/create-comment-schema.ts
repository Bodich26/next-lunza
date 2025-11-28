import * as z from "zod";

export const createCommentSchema = z.object({
  commentText: z
    .string()
    .min(3, {
      message: "Минимум 3 символа.",
    })
    .max(256, {
      message: "Максимум 256 символов.",
    }),
});

export type CreateCommentFormData = z.infer<typeof createCommentSchema>;
