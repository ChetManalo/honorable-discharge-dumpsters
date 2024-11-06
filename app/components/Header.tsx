"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-background text-offWhite hidden md:block">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-4">
          <Image width="112" height="112" src="/images/logo.png" alt="Honorable Discharge Dumpsters logo" />
          <div>
            <h1 className="text-4xl font-bold">Honorable Discharge Dumpsters</h1>
            <p className="text-lg mt-1.5">Fully Insured | Servicing Citrus, Hernando, Pasco, Pinellas, and Hillsborough county</p>
            <p className="mt-1 text-lg block lg:hidden font-semibold">Call or Text us: <a className="text-link underline" href="tel:3525297664">(352) 549-7664</a></p>
          </div>
        </div>
        <div className="text-center text-xl hidden lg:block">
          <p className="font-semibold">Call or Text us:</p>
          <a className="text-link underline" href="tel:3525297664">(352) 549-7664</a>
        </div>
      </div>
      <nav className="flex justify-center bg-highlight text-xl font-semibold">
        <Link className="py-4 px-10 hover:bg-highlightDarken" href="/">Home</Link>
        <div className="relative group py-4 px-10 cursor-default hover:bg-highlightDarken">
          <span>Services⏷</span>
          <ul className="absolute z-40 left-0 top-full w-full bg-highlight whitespace-nowrap hidden group-hover:flex flex-col">
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/mowing">Mowing</Link>
            </li>
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/landscaping">Landscaping</Link>
            </li>
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/under-brushing">Under-brushing</Link>
            </li>
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/debris-removal">Debris removal</Link>
            </li>
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/storm-cleanup">Storm cleanup</Link>
            </li>
            <li>
              <Link className="block py-4 pl-3 w-full hover:bg-highlightDarken" href="/services/junk-removal">Junk removal</Link>
            </li>
          </ul>
        </div>
        <Link className="py-4 px-10 hover:bg-highlightDarken" href="/rent-a-dumpster">Rent a dumpster</Link>
        <Link className="py-4 px-10 hover:bg-highlightDarken" href="/contact">Contact us</Link>
      </nav>
    </header>
  )
}