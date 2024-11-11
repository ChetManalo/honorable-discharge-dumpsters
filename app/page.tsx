import Image from "next/image";
import Link from "next/link";
import { Card, Button, ContactForm } from "./components";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-end justify-end p-6 md:p-12 text-offWhite bg-[url('/images/heroDarker.webp')] bg-no-repeat bg-cover w-full md:w-11/12 max-w-[1700px] max-h-[500px] md:my-8 md:rounded-md mx-auto aspect-video">
        <h2 className="text-2xl md:text-7xl font-bold text-right mb-4">Residential & Commercial<br/>Dumpster Rental</h2>
        <Button size={2} link="/rent-a-dumpster">Rent a Dumpster</Button>
      </section>
      <section className="text-offWhite bg-background">
        <div className="max-w-[1700px] mx-auto flex flex-col items-center xl:flex-row gap-4 xl:gap-8 px-4 pb-14 pt-6">
          <div>
            <h2 className="font-bold text-4xl md:text-5xl mb-2 md:mb-6 text-left">Who are we?</h2>
            <p className="leading-loose max-w-4xl md:text-2xl md:leading-loose">Welcome to Honorable Discharge Dumpsters and Hauling Services, where we proudly bring the values of discipline, integrity, and commitment into the world of hauling and transportation. We specialize in residential and commercial hauling, providing efficient, professional, and punctual services. Your satisfaction is our unwavering commitment, and we eagerly anticipate the opportunity to serve you.</p>
          </div>
          <Image className="mx-auto max-h-[400px]" src="/images/dumpster.png" width={867} height={648} alt="A dumpster being unloaded off a trailer" />
        </div>
      </section>
      <section className="text-center py-14 px-4">
        <h2 className="font-bold text-3xl md:text-5xl mb-4">Our Dumpsters</h2>
        <p className="md:text-lg">For more information on our dumpsters, head to the <Link className="text-background underline" href="rent-a-dumpster">Rent a Dumpster</Link> page.</p>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-6">
          <Card yards={10.5} price={300} image="/images/10HalfYard.jpg" />
          <Card yards={14} price={350} image="/images/14Yard.jpg" />
          <Card yards={15} price={400} image="/images/15yard.jpg" />
        </div>
      </section>
      <section className="text-center bg-background text-offWhite py-8">
        <h2 className="font-bold text-3xl mb-2 md:text-5xl">Email Us</h2>
        <p className="md:text-lg">Use this form to email us or call/text us at <br /><a className="text-link underline" href="tel:3525297664">(352) 549-7664</a></p>
        <ContactForm />
      </section>
    </main>
  );
}
