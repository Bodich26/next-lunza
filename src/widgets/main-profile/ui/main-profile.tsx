import { ProfileBanner } from "./profile-banner";
import { ProfileInfo } from "./profile-info";

interface UserProfile {
  username?: string;
  avatar_url?: string;
}

export const MainProfile = ({ username, avatar_url }: UserProfile) => {
  return (
    <>
      <ProfileBanner />
      <ProfileInfo username={username!} avatarUrl={avatar_url!} />
    </>
  );
};
