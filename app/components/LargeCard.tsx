import Image from "next/image";
import Button from "./Button";

type DumpsterImage = {
  path: string,
  alt: string
}

type Dumpster = {
  dumpster: {
    yards: string,
    price: string,
    image: DumpsterImage,
    desc: string,
    list: string[]
  }
}

export default function LargeCard({dumpster}: Dumpster) {
  const { yards, price, image: {path, alt}, desc, list } = dumpster;

  return (
    <section className="flex flex-col md:flex-row md:gap-4 shadow-md md:h-96 rounded-lg bg-white max-w-6xl">
      <Image className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-full w-full max-w-xl" src={path} height={300} width={400} alt={alt} />
      <div className="flex flex-col justify-between items-center md:items-start p-4">
        <div className="text-center md:text-left">
          <h3 className="font-header font-semibold text-3xl md:text-4xl mb-4">{yards} Yard Dumpster</h3>
        </div>
        <p className="md:text-xl">{desc}</p>
        <ul className="list-disc pl-4 my-4">
          {list && list.map((item: string, i: number) => {
            return <li className="md:text-xl" key={i}>{item}</li>
          })}
        </ul>
        <div className="flex flex-col md:flex-row md:justify-end md:items-center text-center w-full gap-4">
          <p className="text-xl font-semibold">${price} for 48 hour rental</p>
          <Button size={2} link="/rent-a-dumpster/book">Book Now</Button>
        </div>
      </div>
    </section>
  )
}