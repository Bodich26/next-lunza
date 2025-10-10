"use client";
import { useMyProfileApi } from "@/entities/user";
import { ShowErrors } from "@/shared";
import {
  ProfileBanner,
  ProfileInfo,
  ProfileSkeleton,
} from "@/widgets/main-profile";

export default function Profile() {
  const { data: profile, isLoading, error } = useMyProfileApi();

  if (isLoading) {
    return <ProfileSkeleton />;
  }
  if (error) {
    return <ShowErrors errorMessage={error.message} type={"page"} />;
  }
  if (!profile) {
    return (
      <ShowErrors errorMessage={"Профиль не найден"} type={"definition"} />
    );
  }

  return (
    <>
      <ProfileBanner
        altBanner={"Profile Banner"}
        urlBanner={profile.banner_url}
      />
      <ProfileInfo
        userId={profile.id}
        username={profile.username}
        avatarUrl={profile.avatar_url}
        avatarAlt={"Avatar Profile"}
        about="Я люблю создавать, экспериментировать с идеями и постоянно развиваюсь, открывая новое и необычное."
        date={profile.created_at}
      />
    </>
  );
}
