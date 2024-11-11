import Layout from "../Layout";

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

const service: Service = {
  name: "Storm Cleanup",
  desc: "Our storm cleanup service is here to help you recover quickly and efficiently after a storm. From fallen trees and branches to debris scattered across your yard or property, we handle the cleanup with professionalism and care. Our team works swiftly to clear your space, ensuring safety and minimizing further damage. Let us help you get your property back to normal—contact us today for a free estimate and fast, reliable storm cleanup!",
  images: [
    {
      src: "cleanup2",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "cleanup1",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "cleanup4",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "cleanup3",
      alt: "Dumpster being filled with branches and logs"
    },
  ],
  header: "cleanupHeader.webp"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}