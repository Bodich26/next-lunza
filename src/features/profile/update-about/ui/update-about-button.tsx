import { PencilButton } from "@/shared";
import { useUpdateAbout } from "../model/use-update-about";

type Props = {
  userId: string;
  text: string;
};

export const UpdateAboutButton = ({ userId, text }: Props) => {
  const { handleSubmit } = useUpdateAbout(text, userId);
  return <PencilButton onClick={handleSubmit} />;
};
