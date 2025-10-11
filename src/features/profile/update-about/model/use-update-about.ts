import { updateAbout } from "../api/action";

export const useUpdateAbout = (text: string, userId: string) => {
  const handleSubmit = async () => {
    const res = await updateAbout(userId, text);
    if (res.error) {
      alert(res.error);
    } else {
      alert("Текст успешно обновлено!");
    }
  };

  return { handleSubmit, userId, text };
};
