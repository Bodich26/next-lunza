import { getUserProfileApi } from "@/entities/user";
import { ShowErrors } from "@/shared";
import { UserBanner, UserInfo } from "@/widgets/user-profile";

type UserSlug = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function User({ params }: UserSlug) {
  const { slug } = await params;
  const { profileData, error } = await getUserProfileApi(slug);

  if (error) {
    return <ShowErrors errorMessage={error} type={"page"} />;
  }
  if (!profileData) {
    return (
      <ShowErrors errorMessage={"Профиль не найден"} type={"definition"} />
    );
  }
  return (
    <>
      <UserBanner
        altBanner={"Profile Banner"}
        urlBanner={profileData.banner_url}
      />
      <UserInfo
        username={profileData.username}
        avatarUrl={profileData.avatar_url}
        avatarAlt={"Avatar Profile"}
        about={profileData.about}
        date={profileData.created_at}
      />
    </>
  );
}
