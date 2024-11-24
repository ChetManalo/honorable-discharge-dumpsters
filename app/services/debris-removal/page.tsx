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
  name: "Debris Removal",
  desc: "Our debris removal service is here to help you clear out unwanted items and reclaim your space with ease. From construction waste and yard debris to old household items, we handle it all quickly and efficiently. Whether you're renovating, cleaning up after a storm, or simply decluttering. Let us do the heavy lifting—contact us today for a free estimate and enjoy a clutter-free space without the stress!",
  images: [
    {
      src: "debris1",
      alt: "Dumpster being filled with branches and logs"
    }
  ],
  header: "debrisHeader"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}