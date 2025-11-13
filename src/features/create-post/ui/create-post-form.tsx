"use client";
import { NoticeForm } from "@/shared";
import {
  Button,
  Field,
  FileUpload,
  Flex,
  Input,
  Stack,
  Textarea,
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
    <Flex gap={"5"} flexDirection={"column"} h={{ smDown: "100%" }}>
      <form onSubmit={handleSubmitForm} className=" max-sm:h-[100%]">
        <Stack
          h={{ smDown: "100%" }}
          gap="4"
          align="flex-start"
          padding={{ base: "10", mdDown: "6" }}
          border={"solid"}
          borderWidth={"thin"}
          rounded={"md"}
          width={"full"}
          borderColor={"border.default"}
          background={"bg.app"}
          overflow={"auto"}
        >
          {/* Image */}
          <Field.Root required invalid={!!fileErrors}>
            <Field.Label>
              Изображение <Field.RequiredIndicator />
            </Field.Label>
            <FileUpload.Root accept="image/*">
              <FileUpload.HiddenInput {...register("file")} />
              <FileUpload.Trigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  borderColor={"border.default"}
                >
                  <HiUpload /> Добавить изображение
                </Button>
              </FileUpload.Trigger>
              <FileUpload.ItemGroup>
                <FileUpload.Items background={"transparent"} />
              </FileUpload.ItemGroup>
            </FileUpload.Root>
            <Field.ErrorText>{fileErrors?.message}</Field.ErrorText>
          </Field.Root>

          {/* Description */}
          <Field.Root invalid={!!descriptionErrors} flexGrow={{ smDown: 1 }}>
            <Field.Label>Добавьте описание</Field.Label>
            <Textarea
              resize={"none"}
              size="xl"
              height={{ smDown: "60%" }}
              placeholder="Описание к публикации"
              {...register("description")}
              borderColor={"border.default"}
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
