"use client";
import { useMyProfileApi } from "@/entities/user";
import { ShowErrors } from "@/shared";
import {
  ProfileBanner,
  ProfileInfo,
  ProfileSkeleton,
} from "@/widgets/main-profile";
import { ProfileListPosts } from "@/widgets/profile-list-posts";

export default function Profile() {
  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useMyProfileApi();

  return (
    <>
      {/*Профиль пользователя */}
      <section>
        {isProfileLoading && <ProfileSkeleton />}

        {profileError && (
          <ShowErrors errorMessage={profileError.message} type={"page"} />
        )}

        {!isProfileLoading && !profile && (
          <ShowErrors errorMessage="Профиль не найден" type="definition" />
        )}

        {profile && (
          <>
            <ProfileBanner
              altBanner={"Profile Banner"}
              urlBanner={profile.banner_url}
            />
            <ProfileInfo
              username={profile.username}
              avatarUrl={profile.avatar_url}
              avatarAlt={"Avatar Profile"}
              about={profile.about}
              date={profile.created_at}
            />
          </>
        )}
      </section>

      {/*Посты пользователя */}
      <ProfileListPosts />
    </>
  );
}
