import { PencilButton } from "@/shared";

type Props = {
  onClick: () => void;
};
export const EditingAboutButton = ({ onClick }: Props) => {
  return <PencilButton onClick={onClick} />;
};
