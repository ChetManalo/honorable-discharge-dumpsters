import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 pt-16 pb-32">
      <Image src="/images/logo.png" width={200} height={200} alt="Honorable Discharge Dumpsters logo" />
      <h1 className="font-bold text-2xl md:text-4xl">Thank you for contacting us!</h1>
      <p className="text-balance md:text-xl">We have received your message and will get back to you as soon as possible.</p>
      <p className="md:text-xl">We look forward to assisting you!</p>
      <Link className="underline text-background text-lg md:text-2xl" href="/">Back to the Home page</Link>
    </main>
  )
}