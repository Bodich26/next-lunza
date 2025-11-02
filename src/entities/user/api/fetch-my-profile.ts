import { API_ROUTES } from "routes";
import { TypeUserProfileRes } from "../model/type-users-profile";

export const fetchMyProfile = async ({ signal }: { signal?: AbortSignal }) => {
  const res = await fetch(`${API_ROUTES.BASE}${API_ROUTES.MY_PROFILE}`, {
    signal,
  });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const data: TypeUserProfileRes = await res.json();

  if (data.error || !data.profileData) {
    throw new Error(data.error || "Не удалось получить профиль");
  }

  return data.profileData;
};
