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
      <section style={{ background: `url(/images/services/${header}`, backgroundPositionX: 'center', backgroundSize: "cover" }} className={`w-full h-48 md:h-96 flex justify-center items-center shadow-md`}>
        <h1 className="text-offWhite font-bold text-5xl text-center sm:text-7xl">{name}</h1>
      </section>
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-semibold text-center pb-4">How we do {name}</h2>
        <p className="leading-loose md:text-xl md:leading-loose">{desc}</p>
      </section>
      <section className="bg-background pt-8">
        <h2 className="text-4xl font-semibold text-offWhite text-center pb-8">Photo Gallery</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:px-4 items-center overflow-x-scroll gap-4 pb-8">
          {images && images.map((image) => {
            return <Image key={image.src} src={`/images/services/${image.src}.jpg`} width={300} height={250} className="max-h-60 rounded-sm" alt={image.alt} />
          })}
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-4xl font-semibold text-center pb-4">Get a FREE quote on this service</h2>
        <p className="text-center">Use the form below or call/text us at<br/><a className="text-background underline text-lg" href="tel:3525297664">(352) 549-7664</a></p>
        <ContactForm />
      </section>
    </main>
  )
}