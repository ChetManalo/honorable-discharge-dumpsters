import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-offWhite bg-darkGradient py-16 md:pt-12 px-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
        <div className="">
          <Image src="/images/logo.png" height={200} width={200} alt="Honorable Discharge Dumpsters logo" />
        </div>
        <div className="flex-grow flex justify-center">
          <nav className="max-w-lg">
            <ul className="flex flex-wrap justify-center gap-4 underline text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services/mowing">Mowing</Link>
              </li>
              <li>
                <Link href="/services/landscaping">Landscaping</Link>
              </li>
              <li>
                <Link href="/services/debris-removal">Debris Removal</Link>
              </li>
              <li>
                <Link href="/services/storm-cleanup">Storm Cleanup</Link>
              </li>
              <li>
                <Link href="/services/junk-removal">Junk Removal</Link>
              </li>
              <li>
                <Link href="/rent-a-dumpster">Rent a dumpster</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center w-[200px]">
          <p className="text-lg font-semibold">Call/Text us:<br /><a className="text-link underline" href="tel:7272406256">(727) 240-6256</a></p>
          <div className="flex justify-center gap-3 mt-2">
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
    </footer>
  )
}