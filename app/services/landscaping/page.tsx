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
  name: "Landscaping",
  desc: "Our landscaping service transforms your outdoor space into a beautiful, functional area you'll love. Whether you're looking for a complete redesign, regular lawn maintenance, or seasonal updates, our team is here to bring your vision to life. We offer everything from garden design and planting to edging, mulching, and lawn care, ensuring your landscape looks its best year-round. With a focus on quality craftsmanship and eco-friendly practices, we'll create a stunning environment that enhances your property. Contact us today for a free estimate and let us help you elevate your outdoor space!",
  images: [
    {
      src: "landscaping1",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping2",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping3",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping4",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping5",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping6",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "landscaping7",
      alt: "Dumpster being filled with branches and logs"
    },
  ],
  header: "landscapingHeader.webp"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}