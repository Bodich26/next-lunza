import { ElementType } from "react";
import { Box, Circle, Float } from "@chakra-ui/react";

type Props = {
  value?: number;
  icon: ElementType;
  onClick?: () => void;
};
export const CustomIcon = ({ value, icon: Icon, onClick }: Props) => {
  const displayValue = value && value > 0 ? Math.min(value, 99) : undefined;
  return (
    <Box position="relative" cursor="pointer" onClick={onClick}>
      <Box
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        width="34px"
        height="34px"
        rounded="full"
        transition="background 0.2s"
        _hover={{
          bg: {
            _light: "gray.200",
            _dark: "gray.700",
          },
        }}
      >
        <Icon width={24} height={24} />
        {displayValue && (
          <Float offsetX="1.5" offsetY="1.5">
            <Circle size="5" bg="rose.700" color="white" fontSize="xs">
              {displayValue}
            </Circle>
          </Float>
        )}
      </Box>
    </Box>
  );
};
