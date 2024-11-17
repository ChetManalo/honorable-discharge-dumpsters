import Image from "next/image";
import Button from "./Button";

type Dumpster = {
  yards: number,
  price: number,
  desc: string,
  image: string
}

export default function Card({yards, price, desc, image}: Dumpster) {
  return (
    <div className="bg-white px-6 pt-6 pb-8 rounded-md inline-block text-center max-w-sm">
      <Image className="rounded-md min-h-[262px]" src={image} width={350} height={250} alt="" />
      <div className="mt-2 mb-6">
        <h3 className="font-bold text-2xl">{yards} Yard Dumpster</h3>
        <p className="text-lg mb-2">${price} for 48 hour rental</p>
        <p className="text-sm md:text-left min-h-16">{desc}</p>
      </div>
      <Button size={1} link={`/rent-a-dumpster/book`}>Rent this Dumpster</Button>
    </div>
  )
}