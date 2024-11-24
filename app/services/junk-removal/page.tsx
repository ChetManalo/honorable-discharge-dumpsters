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
  name: "Junk Removal",
  desc: "Our junk removal service makes it easy to get rid of unwanted items and reclaim your space. Whether you're clearing out old furniture, appliances, or general clutter, we handle the removal quickly and efficiently. From home cleanouts to office cleanups, our team ensures that your junk is responsibly disposed of. Let us take care of the hard work—contact us today for a free estimate and enjoy a cleaner, more organized space without the hassle!",
  images: [
    {
      src: "junkremoval2",
      alt: "Dumpster being filled with branches and logs"
    },
    {
      src: "junkremoval1",
      alt: "Dumpster being filled with branches and logs"
    },
  ],
  header: "junkRemovalHeader"
}

export default function page() {
  return (
    <>
      <Layout name={service.name} desc={service.desc} images={service.images} header={service.header} />
    </>
  )
}