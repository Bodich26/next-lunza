"use client";
import { useMemo } from "react";

export const usePostDimensions = (
  imageWidth: number,
  imageHeight: number,
  RIGHT_PANEL_WIDTH: number,
  GAP: number,
  PADDING: number
) => {
  return useMemo(() => {
    const aspectRatio = imageWidth / imageHeight;
    const totalDialogWidth = imageWidth + RIGHT_PANEL_WIDTH + GAP + 2 * PADDING;

    return {
      aspectRatio,
      dialogMaxW: `min(${totalDialogWidth}px, 90vw)`,
      dialogMaxH: `90vh`,
      imageMaxWidth: `min(${imageWidth}px, calc(90vw - ${RIGHT_PANEL_WIDTH}px - ${
        2 * PADDING
      }px - ${GAP}px))`,
      imageMaxHeight: `min(${imageHeight}px, 90vh - ${2 * PADDING}px)`,
    };
  }, [imageWidth, imageHeight, RIGHT_PANEL_WIDTH, GAP, PADDING]);
};
