"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  const [toggleNav, setToggleNav] = useState<Boolean>(false);
  const [toggleServices, setToggleServices] = useState<Boolean>(false);

  return (
    <header className="sticky top-0 z-50 text-offWhite md:hidden">
      <div className="flex justify-between p-4 relative z-40 bg-offBlack shadow-md">
        <Image 
          src="/images/logo.png"
          width={80}
          height={43}
          alt="Honorable Discharge Dumpsters logo"
        />
        <Image
          src="/images/burger-menu.svg"
          width={40}
          height={40}
          alt="Open navigation menu" 
          onClick={() => { setToggleNav(!toggleNav) }}
        />
      </div>
      <div className={`flex flex-col justify-between absolute z-30 bg-background top-0 pt-[100px] w-full overflow-hidden h-svh ${toggleNav ? 'max-h-svh' : 'max-h-0'} transition-all`}>
        <nav className="text-3xl pt-4">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <Link onClick={() => { setToggleNav(!toggleNav) }} href="/">Home</Link>
            </li>
            <li>
              <span onClick={() => { setToggleServices(!toggleServices) }}>Services⏷</span>
              <ul className={`text-2xl ${toggleServices ? 'flex flex-col gap-2 mt-2' : 'hidden'}`}>
                <li>
                  <Link href="/services/mowing">Mowing</Link>
                </li>
                <li>
                  <Link href="/services/landscaping">Landscaping</Link>
                </li>
                <li>
                  <Link href="/services/under-brushing">Under-brushing</Link>
                </li>
                <li>
                  <Link href="/services/debris-removal">Debris removal</Link>
                </li>
                <li>
                  <Link href="/services/storm-cleanup">Storm cleanup</Link>
                </li>
                <li>
                  <Link href="/services/junk-removal">Junk removal</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/rent-a-dumpster">Rent a dumpster</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="text-center flex flex-col gap-3 pb-4">
          <p>Fully Insured | Servicing Citrus, Hernando, Pasco, Pinellas, and Hillsborough county</p>
          <p className="text-lg font-semibold">Call or Text us: <a className="text-link underline" href="tel:3525297664">(352) 549-7664</a></p>
          <div className="flex justify-center gap-3">
            <a target="_blank" href="https://www.facebook.com/people/Honorable-Discharge-Dumpsters-Hauling-Services/61563285702063/">
              <Image 
                src="/images/facebook.svg"
                width={40}
                height={40}
                alt="Facebook logo"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/honorabledischargedumpsters/">
              <Image 
                src="/images/instagram.svg"
                width={40}
                height={40}
                alt="Instagram logo"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}