import * as z from "zod";

export const updateCommentSchema = z.object({
  commentText: z
    .string()
    .min(3, {
      message: "Минимум 3 символа.",
    })
    .max(256, {
      message: "Максимум 256 символов.",
    }),
});

export type UpdateCommentFormData = z.infer<typeof updateCommentSchema>;
