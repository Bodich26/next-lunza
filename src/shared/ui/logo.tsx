import Image from "next/image";
import Link from "next/link";

type Props = {
  width: number;
  height: number;
  alt: string;
  src: string;
  href?: string;
};
export const Logo = ({ src, width, height, alt, href }: Props) => {
  const image = <Image src={src} width={width} height={height} alt={alt} />;

  if (href) {
    return <Link href={href}>{image}</Link>;
  }

  return image;
};
