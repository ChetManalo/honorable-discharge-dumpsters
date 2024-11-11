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
  name: "Under-brushing",
  desc: "Our under-brushing service is perfect for clearing overgrown brush, weeds, and undergrowth from your property. Whether you're preparing for a new landscape, improving the health of your land, or clearing a path, our team efficiently removes unwanted vegetation to enhance the beauty and accessibility of your space. We handle everything from small brush to thicker growth, ensuring a clean, tidy area. With a focus on eco-friendly practices and careful land management, we'll help you create a more usable, visually appealing outdoor space. Contact us today for a free estimate and let us take care of the underbrush!",
  images: [
    {
      src: "underbrushing1",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "underbrushing2",
      alt: "Dumpster being filled with branches and logs"
    },
  ],
  header: "underbrushingHeader.webp"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}