import { useQuery } from "@tanstack/react-query";
import { TypeUserProfile } from "../model/type-users-profile";
import { fetchMyProfile } from "./fetch-my-profile";

export const profileQueryKeys = {
  myProfile: ["myProfile"] as const,
};

export const useMyProfileApi = () => {
  return useQuery<TypeUserProfile, Error>({
    queryKey: profileQueryKeys.myProfile,
    queryFn: fetchMyProfile,
    retry: 1,
  });
};
