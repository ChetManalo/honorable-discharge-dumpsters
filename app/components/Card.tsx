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
    <div className="bg-offWhite rounded-md text-center max-w-sm shadow-lg h-[490px] flex flex-col items-center justify-between pb-4">
      <Image className="w-full h-64 rounded-t-md" src={image} width={350} height={250} alt="" />
      <div className="text-offBlack">
        <h3 className="font-bold text-2xl font-header">{yards} Yard Dumpster</h3>
        <p className="text-sm h-16 text-slate-600 mt-2 px-4">{desc}</p>
        <p className="text-lg font-semibold">${price} for 48 hour rental</p>
      </div>
      <Button size={1} link={`/rent-a-dumpster/book`}>Rent this Dumpster</Button>
    </div>
  )
}