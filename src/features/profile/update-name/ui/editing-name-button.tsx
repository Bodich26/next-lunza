import { PencilButton } from "@/shared";

type Props = {
  onClick: () => void;
};
export const EditingNameButton = ({ onClick }: Props) => {
  return <PencilButton onClick={onClick} />;
};
