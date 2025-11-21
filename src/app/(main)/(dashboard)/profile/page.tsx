"use client";
import { useMyPostApi } from "@/entities/posts";
import { useMyProfileApi } from "@/entities/user";
import { ShowErrors, ShowNotice } from "@/shared";
import {
  ProfileBanner,
  ProfileInfo,
  ProfileSkeleton,
} from "@/widgets/main-profile";
import {
  PostsListSkeleton,
  ProfileListPosts,
} from "@/widgets/profile-list-posts";

export default function Profile() {
  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useMyProfileApi();

  const {
    data: posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = useMyPostApi();

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
      <section>
        {isPostsLoading && <PostsListSkeleton />}

        {postsError && <ShowNotice errorMessage={postsError.message} />}

        {!isProfileLoading && !profile && (
          <ShowNotice errorMessage="Публикации ненайдены" />
        )}

        {posts && posts.length === 0 && (
          <ShowNotice errorMessage="У пользователя нет публикации" />
        )}

        {posts && <ProfileListPosts posts={posts} />}
      </section>
    </>
  );
}
