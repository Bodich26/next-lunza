import { FloatingLabelInput } from "@/shared";
import { Button, Field } from "@chakra-ui/react";
import { useNewAbout } from "../model/use-new-about";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const NewAboutForm = ({ value, onChange }: Props) => {
  const { handleSubmitForm, isLoading, aboutNewErrors, register } =
    useNewAbout();

  return (
    <form onSubmit={handleSubmitForm} className="flex justify-between gap-3">
      <Field.Root invalid={!!aboutNewErrors}>
        <FloatingLabelInput
          type="text"
          borderColor={"textPrimary"}
          {...register("about")}
          label="Новое описание"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {aboutNewErrors && (
          <Field.ErrorText>{aboutNewErrors.message}</Field.ErrorText>
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
