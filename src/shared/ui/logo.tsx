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
    return (
      <Link
        href={href}
        className="uppercase font-bold text-[32px] inline-flex items-center gap-3 leading-[1em] tracking-[0.22em]"
      >
        {image} Lunza
      </Link>
    );
  }

  return image;
};
