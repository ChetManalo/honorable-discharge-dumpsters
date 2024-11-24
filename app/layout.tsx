import "./globals.css";
import { Metadata } from "next";
import { Roboto, Oswald } from 'next/font/google';
import { Header, MobileHeader, Footer, GoogleCaptchaWrapper } from "./components";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Honorable Discharge Dumpsters',
  description: 'Reliable dumpster rentals and other professional services currently serving Citrus, Hernando, Pasco, Pinellas, and Hillsborough county. Offering affordable rates, prompt delivery, and eco-friendly solutions for residential and commercial projects. Contact us today to get started!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${oswald.variable}`}>
        <MobileHeader />
        <Header />
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
        <Footer />
      </body>
    </html>
  );
}
