import { PencilButton } from "@/shared";
import { useUpdateName } from "../model/use-update-name";

type Props = {
  userId: string;
  newName: string;
};

export const UpdateNameButton = ({ userId, newName }: Props) => {
  const { handleSubmit } = useUpdateName(newName, userId);
  return <PencilButton onClick={handleSubmit} />;
};
