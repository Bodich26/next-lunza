import { FloatingLabelInput } from "@/shared";
import { Button, Field } from "@chakra-ui/react";
import { useNewName } from "../model/use-new-name";

type Props = {
  value: string;
  onChange: (val: string) => void;
  closeForm: () => void;
};

export const NewNameForm = ({ value, onChange, closeForm }: Props) => {
  const { handleSubmitForm, isLoading, nameNewErrors, register } =
    useNewName(closeForm);

  return (
    <form onSubmit={handleSubmitForm} className="flex justify-between gap-3 ">
      <Field.Root required invalid={!!nameNewErrors}>
        <FloatingLabelInput
          type="text"
          borderColor={"textPrimary"}
          {...register("name")}
          label="Новое имя"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {nameNewErrors && (
          <Field.ErrorText>{nameNewErrors.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Button
        className="w-[115px]"
        type="submit"
        colorPalette={"gray"}
        loading={isLoading}
      >
        Сохранить
      </Button>
    </form>
  );
};
