"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [toggleServices, setToggleServices] = useState<boolean>(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleNav]);

  return (
    <header className="sticky top-0 z-50 text-offWhite md:hidden">
      <div className="flex justify-between p-4 relative z-40 bg-offBlack">
        <Link href="/">
        <Image 
          src="/images/logo.png"
          width={80}
          height={43}
          alt="Honorable Discharge Dumpsters logo"
        />
        </Link>
        <Image
          src="/images/burger-menu.svg"
          width={40}
          height={40}
          alt="Open navigation menu" 
          onClick={() => { setToggleNav(!toggleNav) }}
        />
      </div>
      <div className={`flex flex-col justify-between absolute z-30 bg-offBlack top-0 pt-[100px] pb-24 w-full overflow-hidden h-screen ${toggleNav ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all`}>
        <nav className="text-2xl pt-4">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <Link onClick={() => { setToggleNav(!toggleNav) }} href="/">Home</Link>
            </li>
            <li>
              <span onClick={() => { setToggleServices(!toggleServices) }}>Services <span className="text-sm -translate-y-1 inline-block">&#9660;</span></span>
              <ul className={`text-xl ${toggleServices ? 'flex flex-col gap-2 mt-2' : 'hidden'}`}>
                <li>
                  <Link onClick={() => { setToggleNav(!toggleNav) }} href="/services/mowing">Mowing</Link>
                </li>
                <li>
                  <Link onClick={() => { setToggleNav(!toggleNav) }} href="/services/landscaping">Landscaping</Link>
                </li>
                <li>
                  <Link onClick={() => { setToggleNav(!toggleNav) }} href="/services/debris-removal">Debris removal</Link>
                </li>
                <li>
                  <Link onClick={() => { setToggleNav(!toggleNav) }} href="/services/storm-cleanup">Storm cleanup</Link>
                </li>
                <li>
                  <Link onClick={() => { setToggleNav(!toggleNav) }} href="/services/junk-removal">Junk removal</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={() => { setToggleNav(!toggleNav) }} href="/rent-a-dumpster">Rent a dumpster</Link>
            </li>
            <li>
              <Link onClick={() => { setToggleNav(!toggleNav) }} href="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="text-center flex flex-col gap-3 pb-4">
          <p>Fully Insured | Servicing Citrus, Hernando, Pasco, Pinellas, and Hillsborough county</p>
          <p className="text-lg font-semibold">Call or Text us: <a className="text-link underline" href="tel:3525297664">(352) 549-7664</a></p>
        </div>
      </div>
    </header>
  )
}