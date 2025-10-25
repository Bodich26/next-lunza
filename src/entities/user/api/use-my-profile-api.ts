import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  TypeUserProfile,
  TypeUserProfileRes,
} from "../model/type-users-profile";
import { BASE_ROUTE_API, MY_PROFILE_ROUTE_API } from "routes";

export const profileQueryKeys = {
  myProfile: ["myProfile"] as const,
};

export const useMyProfileApi = () => {
  const fetchMyProfile = async ({ signal }: { signal?: AbortSignal }) => {
    const res = await fetch(`${BASE_ROUTE_API}${MY_PROFILE_ROUTE_API}`, {
      signal,
    });
    if (!res.ok) throw new Error(`Network error: ${res.status}`);

    const data: TypeUserProfileRes = await res.json();

    if (data.error || !data.profileData) {
      throw new Error(data.error || "Не удалось получить профиль");
    }

    return data.profileData;
  };

  return useQuery<TypeUserProfile, Error>({
    queryKey: profileQueryKeys.myProfile,
    queryFn: fetchMyProfile,
    retry: 1,
    placeholderData: keepPreviousData,
  });
};
