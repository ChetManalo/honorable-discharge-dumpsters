import Image from "next/image";
import { LargeCard } from "../components";

type DumpsterImage = {
  path: string,
  alt: string
}

type Dumpster = {
  yards: string,
  price: string,
  image: DumpsterImage,
  desc: string,
  list: string[]
}

export default function page() {
  const tenHalf: Dumpster = {
    yards: "10.5",
    price: "300",
    image: {
      path: "/images/10HalfYard.jpg",
      alt: "10 and a half yard dumpster"
    },
    desc: "Perfect for small to mid-sized projects, such as home cleanouts, minor remodeling, or yard waste removal.",
    list: [
      "Small furniture (chairs, small tables)",
      "Boxes of household junk",
      "Yard waste like branches, grass clippings, and leaves",
      "Minor construction debris (drywall, tiles)"
    ]
  }

  const fourteen: Dumpster = {
    yards: "14",
    price: "380",
    image: {
      path: "/images/14Yard.jpg",
      alt: "14 yard dumpster"
    },
    desc: "Ideal for medium-sized projects like extensive home cleanouts, bathroom or kitchen renovations, and large landscaping jobs.",
    list: [
      "Medium-sized furniture (couches, dressers)",
      "Small appliances",
      "Construction debris (flooring, drywall, tiles)",
      "Yard debris and light demolition waste"
    ]
  }

  const fifteen: Dumpster = {
    yards: "15",
    price: "400",
    image: {
      path: "/images/15yard.jpg",
      alt: "15 yard dumpster"
    },
    desc: "Popular choice for moderate-sized projects, including larger home cleanouts, small remodels, and yard overhauls.",
    list: [
      "Larger furniture (sofas, dining tables)",
      "Appliances (dishwasher, washing machine)",
      "Heavier construction materials (plaster, roofing material)",
      "Bulkier yard waste and mixed debris"
    ]
  }

  return (
    <main>
      <section className="bg-[url('/images/heroDarker.webp')] bg-cover h-48 md:h-96 flex justify-center items-center">
        <h1 className="text-offWhite font-bold text-5xl text-center sm:text-7xl">Rent a Dumpster</h1>
      </section>
      <section className="flex flex-col items-center gap-4 p-4 py-8">
        <h2 className="text-center font-semibold text-4xl">Our Dumpsters</h2>
        <LargeCard dumpster={tenHalf} />
        <LargeCard dumpster={fourteen} />
        <LargeCard dumpster={fifteen} />
      </section>
    </main>
  )
}