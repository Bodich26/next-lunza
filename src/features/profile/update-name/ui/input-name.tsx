import { FloatingLabelInput } from "@/shared";
import { Field } from "@chakra-ui/react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const InputName = ({ value, onChange }: Props) => {
  return (
    <Field.Root>
      <FloatingLabelInput
        borderColor={"textPrimary"}
        label="Новое имя"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      {!value.trim() && (
        <Field.ErrorText>Поле не может быть пустым</Field.ErrorText>
      )}
    </Field.Root>
  );
};
