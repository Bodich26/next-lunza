import { FloatingLabelInput } from "@/shared";
import { Button, Field } from "@chakra-ui/react";
import { useNewAbout } from "../model/use-new-about";

type Props = {
  value: string;
  onChange: (val: string) => void;
  closeForm: () => void;
};

export const NewAboutForm = ({ value, onChange, closeForm }: Props) => {
  const { handleSubmitForm, isLoading, aboutNewErrors, register } =
    useNewAbout(closeForm);

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex justify-between gap-3 w-[428px]"
    >
      <Field.Root invalid={!!aboutNewErrors} w={"428px"}>
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
