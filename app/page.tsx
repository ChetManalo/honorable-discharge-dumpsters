import Image from "next/image";
import Link from "next/link";
import { Card, Button, ContactForm } from "./components";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-6 md:gap-12 p-6 md:p-12 text-offWhite bg-[url('/images/hero.webp')] bg-no-repeat bg-cover w-full max-h-[500px] aspect-video">
        <h2 className="font-header text-5xl md:text-8xl font-bold text-balance text-center max-w-5xl">Residential & Commercial Dumpster Rental</h2>
        <Button size={2} link="/rent-a-dumpster">Rent a Dumpster Now</Button>
      </section>
      <section className="text-offBlack py-4 md:py-14">
        <div className="max-w-[1700px] mx-auto flex flex-col items-center xl:flex-row xl:justify-center gap-4 xl:gap-8 px-4 py-8">
          <div>
            <h2 className="font-header font-bold text-5xl md:text-6xl mb-2 md:mb-6 text-left">Who are we?</h2>
            <p className="leading-loose py-4 md:0 max-w-4xl text-lg md:text-2xl md:leading-loose">Welcome to Honorable Discharge Dumpsters and Hauling Services, where we proudly bring the values of discipline, integrity, and commitment into the world of hauling and transportation. We specialize in residential and commercial hauling, providing efficient, professional, and punctual services. Your satisfaction is our unwavering commitment, and we eagerly anticipate the opportunity to serve you.</p>
          </div>
          <Image className="max-h-[400px] max-w-lg w-full shadow-md rounded" src="/images/dumpsters.webp" width={1000} height={566} alt="Four dumpsters lined up next to each other" />
        </div>
      </section>
      <section className="text-center py-14 px-4 bg-blueGradient text-offWhite">
        <h2 className="font-header font-bold text-5xl md:text-6xl mb-8">Our Dumpsters</h2>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-6">
          <Card yards={10.5} price={300} desc="Perfect for small to mid-sized projects, such as home cleanouts, minor remodeling, or yard waste removal." image="/images/10HalfYard.jpg" />
          <Card yards={14} price={380} desc="Ideal for medium-sized projects like extensive home cleanouts, bathroom or kitchen renovations, and large landscaping jobs." image="/images/14Yard.jpg" />
          <Card yards={15} price={400} desc="Popular choice for moderate-sized projects, including larger home cleanouts, small remodels, and yard overhauls." image="/images/15yard.jpg" />
        </div>
        <p className="text-lg mt-8">For more information on our dumpsters, head to the <Link className="text-link underline" href="rent-a-dumpster">Rent a Dumpster</Link> page.</p>
      </section>
      <section className="text-center text-offBlack py-8">
        <h2 className="font-header font-bold text-5xl mb-4 md:text-6xl">Contact Us</h2>
        <p className="text-lg">Use this form to email us or call/text us at <br /><a className="text-background underline text-xl" href="tel:3525297664">(352) 549-7664</a></p>
        <ContactForm />
      </section>
    </main>
  );
}
