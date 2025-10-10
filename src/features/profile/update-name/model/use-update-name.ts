import { updateName } from "../api/action";

export const useUpdateName = (newName: string, userId: string) => {
  const handleSubmit = async () => {
    const res = await updateName(userId, newName);
    if (res.error) {
      alert(res.error);
    } else {
      alert("Имя успешно обновлено!");
    }
  };

  return { handleSubmit, userId, newName };
};
