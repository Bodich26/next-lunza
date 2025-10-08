"use client";
import { useMyProfileApi } from "@/entities/user";
import { MainProfile } from "@/widgets/main-profile";

export default function Profile() {
  const { data: profile, isLoading, error } = useMyProfileApi();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!profile) {
    return <p>Профиль не найден</p>;
  }

  return (
    <MainProfile username={profile.username} avatar_url={profile.avatar_url} />
  );
}
