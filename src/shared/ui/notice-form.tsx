import { Alert, Box } from "@chakra-ui/react";

type Props = {
  success?: string;
  error?: string;
};
export const NoticeForm = ({ success, error }: Props) => {
  if (success) {
    return (
      <Box width={"full"}>
        <Alert.Root status={"success"} variant="surface">
          <Alert.Indicator />
          <Alert.Title>{success}</Alert.Title>
        </Alert.Root>
      </Box>
    );
  }
  if (error) {
    return (
      <Box width={"full"}>
        <Alert.Root status={"error"} variant="surface">
          <Alert.Indicator />
          <Alert.Title>{error}</Alert.Title>
        </Alert.Root>
      </Box>
    );
  }

  return null;
};
