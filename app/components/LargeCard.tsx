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
    <section className="flex flex-col md:flex-row md:gap-4 items-center p-4 md:p-8 rounded-md bg-white max-w-6xl">
      <Image className="rounded-md" src={path} height={300} width={400} alt={alt} />
      <div>
        <div className="text-center my-4 md:text-left">
          <h3 className="font-semibold text-3xl">{yards} Yard Dumpster</h3>
          <p className="text-xl">${price} for 48 hour rental</p>
        </div>
        <p className="md:text-xl">{desc}</p>
        <ul className="list-disc pl-4 my-4">
          {list && list.map((item: string, i: number) => {
            return <li className="md:text-lg" key={i}>{item}</li>
          })}
        </ul>
        <div className="text-center md:text-right py-4">
          <Button size={2} link="#">Rent Now</Button>
        </div>
      </div>
    </section>
  )
}