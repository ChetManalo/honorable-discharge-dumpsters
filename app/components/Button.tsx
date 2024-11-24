import Link from "next/link";
import { ReactNode } from "react";

type Button = {
  size: number,
  link: string,
  children: ReactNode
}

export default function Button({ size, link, children }: Button) {
  return (
    // Maybe keep border, but modify it a bit or just get rid of it
    <Link className={`bg-redGradient hover:bg-redGradientReverse border-2 border-[#91000b] text-offWhite font-semibold shadow-lg py-4 ${size === 1 ? 'px-4' : 'px-8 text-lg md:text-xl'}`} href={link}>{children}</Link>
  )
}