import { API_ROUTES } from "routes";
import { TypeUserProfileRes } from "../model/type-users-profile";

export const fetchMyProfile = async ({ signal }: { signal?: AbortSignal }) => {
  const URL = `${API_ROUTES.BASE}${API_ROUTES.MY_PROFILE}`;
  const res = await fetch(`${URL}`, { signal });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const data: TypeUserProfileRes = await res.json();

  if (data.error || !data.profileData) {
    throw new Error(data.error || "Не удалось получить профиль");
  }

  return data.profileData;
};
