import { ProfileBanner } from "./profile-banner";
import { ProfileInfo } from "./profile-info";

export const MainProfile = ({ profile }) => {
  return (
    <>
      <ProfileBanner />
      <ProfileInfo username={profile.username} avatarUrl={profile.avatar_url} />
    </>
  );
};
