import { API_ROUTES } from "routes";
import { TypeUserPostsRes } from "../model/type-user-posts";

export const fetchMyPosts = async ({ signal }: { signal?: AbortSignal }) => {
  const URL = `${API_ROUTES.BASE}${API_ROUTES.MY_POSTS}`;
  const res = await fetch(`${URL}`, { signal });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const data: TypeUserPostsRes = await res.json();

  if (data.error || !data.userPostsData) {
    throw new Error(data.error || "Не удалось получить публикации");
  }

  return data.userPostsData;
};
