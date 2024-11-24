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
  name: "Mowing",
  desc: "We provide professional lawn mowing services to keep your yard looking neat, healthy, and well-maintained all season long. Whether you're a homeowner aiming for a pristine lawn, a business needing regular grounds upkeep, or just looking to save time on lawn care, we're here to help. Our team is committed to precision mowing and edging, creating a polished look and promoting healthier grass growth. With a focus on dependable, eco-friendly service, we leave your property looking sharp and green. Trust us to take care of the hard work—contact us today for a free estimate and enjoy a beautifully mowed lawn without the hassle!",
  images: [
    {
      src: "mowing1",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "mowing2",
      alt: "Dumpster being filled with branches and logs"
    },
  ],
  header: "mowingHeader"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}