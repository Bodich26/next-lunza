"use server";
import sharp from "sharp";

export const getSizeImages = async (postFile: File) => {
  const arrayBuffer = await postFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const metadata = await sharp(buffer).metadata();
  const width = metadata.width;
  const height = metadata.height;

  return { width, height };
};
