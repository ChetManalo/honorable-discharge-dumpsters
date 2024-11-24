import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 pt-16 pb-32 bg-[url('/images/hero.webp')] bg-no-repeat bg-cover">
      <Image src="/images/logo.png" width={200} height={200} alt="Honorable Discharge Dumpsters logo" />
      <section className="text-offWhite">
        <h1 className="font-bold font-header text-5xl md:text-6xl">Thank you for contacting us!</h1>
        <div className="my-6 md:text-2xl">
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>We look forward to assisting you!</p>
        </div>
      </section>
      <Link className="underline text-link text-lg md:text-2xl" href="/">Back to the Home page</Link>
    </main>
  )
}