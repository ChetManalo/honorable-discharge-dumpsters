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
    yards: "13",
    price: "300",
    image: {
      path: "/images/13Yard.jpg",
      alt: "13 yard dumpster"
    },
    desc: "Perfect for small to mid-sized projects, such as home cleanouts, minor remodeling, or yard waste removal.",
    list: [
      "Small furniture (chairs, small tables)",
      "Boxes of household junk",
      "Yard waste like branches, grass clippings, and leaves",
      "Minor construction debris (drywall, tiles)"
    ]
  }

  return (
    <main>
      <section className="bg-[url('/images/hero.webp')] bg-cover h-48 md:h-96 flex justify-center items-center">
        <h1 className="text-offWhite font-header font-bold text-5xl text-center sm:text-7xl">Rent a Dumpster</h1>
      </section>
      <section className="flex flex-col items-center gap-4 md:gap-6 p-4 py-8">
        <h2 className="text-center font-header font-semibold text-5xl mb-4 md:text-6xl">Our Dumpsters</h2>
        <LargeCard dumpster={tenHalf} />
      </section>
    </main>
  )
}