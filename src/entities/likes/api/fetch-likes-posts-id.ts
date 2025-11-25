import { API_ROUTES } from "routes";
import { TypePostLikesRes } from "../model/type-likes";

export const fetchLikesPostsId = async ({
  signal,
  postId,
}: {
  signal?: AbortSignal;
  postId: number;
}) => {
  const URL = `${API_ROUTES.BASE}${API_ROUTES.POSTS}/${postId}${API_ROUTES.LIKES}`;

  const res = await fetch(`${URL}`, { signal });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const data: TypePostLikesRes = await res.json();

  if (data.error || !data.postLikes) {
    throw new Error(data.error || "Не удалось получить лайки");
  }

  return data;
};
