"use client";
import React from "react";
import { Box, Button, Field, Input, InputGroup, Stack } from "@chakra-ui/react";
import { useCreateComment } from "../model/use-create-comment";
import { cn, NoticeForm } from "@/shared";

export const CreateCommentForm = ({ postId }: { postId: number }) => {
  const [isOpenBtn, setIsOpenBtn] = React.useState<boolean>(false);
  const {
    handleSubmitForm,
    commentTextError,
    resError,
    resSuccess,
    register,
    isLoading,
  } = useCreateComment(postId);

  const handleOnChange = (value: string) => {
    setIsOpenBtn(value.trim().length > 0);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Stack
        gap="4"
        align="flex-start"
        rounded={"md"}
        width={"full"}
        paddingX={{ mdDown: "16px" }}
        mt={{ mdDown: "12px" }}
      >
        <Box display={"flex"} gap="4" width={"full"} paddingX={"1"}>
          {/* Email */}
          <Field.Root
            required
            invalid={!!commentTextError}
            display={"flex"}
            flexDirection={"column"}
          >
            <InputGroup>
              <Input
                type="text"
                {...register("commentText")}
                required
                placeholder="Написать комментарий"
                borderColor={"border.default"}
                onChange={(e) => handleOnChange(e.target.value)}
              />
            </InputGroup>
            <Field.ErrorText>{commentTextError?.message}</Field.ErrorText>
          </Field.Root>
          {/* Button */}
          <Button
            className={cn(isOpenBtn ? "block" : "hidden!")}
            type="submit"
            background={"accent.primary"}
            color={"text.white"}
            rounded={"md"}
            _active={{ background: "rose.800" }}
            _hover={{ background: "rose.800" }}
            loading={isLoading}
          >
            Отправить
          </Button>
        </Box>

        {/*Notice*/}
        <NoticeForm success={resSuccess} error={resError} />
      </Stack>
    </form>
  );
};
