import { getCurrentUserProfile } from "@/entities/user";
import { MainProfile } from "@/widgets/main-profile";
const { data: profile, error } = await getCurrentUserProfile();
console.log(profile);

export default async function Profile() {
  return <MainProfile profile={profile} />;
}
