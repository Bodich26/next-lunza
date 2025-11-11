"use client";
import { NoticeForm } from "@/shared";
import {
  Button,
  Field,
  FileUpload,
  Flex,
  Input,
  Stack,
} from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { useCreatePost } from "../model/use-create-post";

export const CreatePostForm = () => {
  const {
    handleSubmitForm,
    descriptionErrors,
    fileErrors,
    register,
    isLoading,
    resError,
    resSuccess,
  } = useCreatePost();

  return (
    <Flex gap={"5"} flexDirection={"column"} className="max-w-[487px]">
      <form onSubmit={handleSubmitForm}>
        <Stack
          gap="4"
          align="flex-start"
          padding={"10"}
          border={"solid"}
          borderWidth={"thin"}
          rounded={"md"}
          width={"full"}
          borderColor={"border.default"}
          background={"bg.app"}
          overflow={"auto"}
        >
          {/* Image */}

          <Field.Root invalid={!!fileErrors}>
            <FileUpload.Root accept="image/*">
              <FileUpload.HiddenInput {...register("file")} />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm">
                  <HiUpload /> Добавить изображение
                </Button>
              </FileUpload.Trigger>
              <FileUpload.List />
            </FileUpload.Root>
            <Field.ErrorText>{fileErrors?.message}</Field.ErrorText>
          </Field.Root>

          {/* Description */}

          <Field.Root invalid={!!descriptionErrors}>
            <Field.Label>Добавьте описание</Field.Label>
            <Input
              type="text"
              {...register("description")}
              required
              placeholder="Описание к публикации"
            />
            <Field.ErrorText>{descriptionErrors?.message}</Field.ErrorText>
          </Field.Root>

          {/*Notice*/}
          <NoticeForm success={resSuccess} error={resError} />

          {/* Button */}
          <Button
            className="w-full"
            type="submit"
            loading={isLoading}
            background={"accent.primary"}
            color={"text.white"}
            rounded={"md"}
            _active={{ background: "rose.800" }}
            _hover={{ background: "rose.800" }}
          >
            Добавить
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
