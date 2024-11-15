import Image from "next/image";
import Button from "./Button";

type Dumpster = {
  yards: number,
  price: number,
  image: string
}

export default function Card({yards, price, image}: Dumpster) {
  return (
    <div className="bg-white p-6 rounded-md inline-block text-center">
      <Image className="rounded-md min-h-[262px]" src={image} width={350} height={250} alt="" />
      <div className="mt-2 mb-6">
        <h3 className="font-bold text-2xl">{yards} Yard Dumpster</h3>
        <p className="text-lg">${price} for 48 hour rental</p>
      </div>
      <Button size={1} link={`/rent-a-dumpster/form?default=${yards}`}>Rent this Dumpster</Button>
    </div>
  )
}