import { ElementType } from "react";
import { Box, Circle, Float } from "@chakra-ui/react";
import { cn } from "../lib/utils";

type Props = {
  value?: number;
  icon: ElementType;
  onClick?: () => void;
  iconHeight: number;
  iconWidth: number;
  hoverEffect?: boolean;
};
export const CustomIcon = ({
  value,
  icon: Icon,
  onClick,
  iconWidth,
  iconHeight,
  hoverEffect,
}: Props) => {
  const displayValue = value && value > 0 ? Math.min(value, 99) : undefined;

  return (
    <Box
      position="relative"
      cursor={"pointer"}
      onClick={onClick}
      className={"inline-flex items-center justify-center rounded-full "}
      padding={"1"}
      _light={{
        bg: hoverEffect ? "transparent" : " transparent",
        _hover: hoverEffect ? { bg: "transparent" } : { bg: "whites.400" },
      }}
      _dark={{
        bg: hoverEffect ? "transparent" : "transparent",
        _hover: hoverEffect ? { bg: "transparent" } : { bg: "blacks.500" },
      }}
    >
      <Icon width={iconWidth} height={iconHeight} />
      {displayValue && (
        <Float offsetX="1.5" offsetY="1.5">
          <Circle size="5" bg="rose.700" color="white" fontSize="xs">
            {displayValue}
          </Circle>
        </Float>
      )}
    </Box>
  );
};
