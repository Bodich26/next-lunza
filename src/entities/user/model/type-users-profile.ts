export type TypeUserProfile = {
  id: string;
  created_at: string;
  updated_at: string;
  last_seen_at: string;
  username: string;
  about: string;
  full_name: string;
  avatar_url: string;
  banner_url: string;
  email: string;
};

export type TypeUserProfileRes = {
  profileData: TypeUserProfile | null;
  success?: boolean;
  error?: string;
};
