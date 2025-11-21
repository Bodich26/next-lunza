import { API_ROUTES } from "routes";
import { TypePostsCommentsRes } from "../model/type-comments";

export const fetchCommentsPostsId = async ({
  signal,
  postId,
}: {
  signal?: AbortSignal;
  postId: number;
}) => {
  const res = await fetch(
    `${API_ROUTES.BASE}${API_ROUTES.POSTS}/${postId}${API_ROUTES.COMMENTS}`,
    {
      signal,
    }
  );

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const data: TypePostsCommentsRes = await res.json();

  if (data.error || !data.postsComments) {
    throw new Error(data.error || "Не удалось получить публикации");
  }

  return data.postsComments;
};
