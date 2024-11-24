import { ContactForm } from "../components";
import Image from "next/image";

type ServiceImage = {
  src: string,
  alt: string
}

type Service = {
  name: string,
  desc: string,
  images: ServiceImage[],
  header: string
}

export default function Layout({name, desc, images, header}: Service) {
  return (
    <main>
      <section className="relative w-full h-48 md:h-96 flex justify-center items-center shadow-md">
        <Image src={`/images/services/${header}.webp`} placeholder="blur" blurDataURL={`/images/services/${header}Blur.webp`} className="h-full w-full" width={1920} height={500} alt=""/>
        <h1 className="absolute text-offWhite font-header font-bold text-5xl text-center sm:text-7xl">{name}</h1>
      </section>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-header font-semibold text-center pb-8">How we do {name}</h2>
        <p className="leading-loose md:text-xl md:leading-loose">{desc}</p>
      </section>
      <section className="bg-blueGradient py-12">
        <h2 className="text-5xl md:text-6xl font-header font-semibold text-offWhite text-center pb-8">Photo Gallery</h2>
        <div className="flex flex-wrap justify-center px-4 items-center gap-4 max-w-7xl mx-auto">
          {images && images.map((image) => {
            return <Image key={image.src} src={`/images/services/${image.src}.jpg`} width={300} height={250} className="max-h-60 rounded-sm" alt={image.alt} />
          })}
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-5xl md:text-6xl font-header font-semibold text-center pb-4">Get a FREE quote on this service</h2>
        <p className="text-center text-lg">Use the form below or call/text us at<br/><a className="text-background underline text-xl" href="tel:3525297664">(352) 549-7664</a></p>
        <ContactForm />
      </section>
    </main>
  )
}