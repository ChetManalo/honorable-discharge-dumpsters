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
    <Link className={`bg-highlight hover:bg-highlightDarken border border-highlightDarken text-offWhite rounded font-semibold ${size === 1 ? 'px-4 py-3' : 'px-8 py-3 text-lg md:text-xl'}`} href={link}>{children}</Link>
  )
}