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
  const activeClass = hoverEffect
    ? "isHover-icon-background bg-transparent!"
    : "isHover-icon-background ";

  return (
    <Box position="relative" onClick={onClick}>
      <div className={cn("cursor-pointer", activeClass)}>
        <Icon width={iconWidth} height={iconHeight} />
        {displayValue && (
          <Float offsetX="1.5" offsetY="1.5">
            <Circle size="5" bg="rose.700" color="white" fontSize="xs">
              {displayValue}
            </Circle>
          </Float>
        )}
      </div>
    </Box>
  );
};
