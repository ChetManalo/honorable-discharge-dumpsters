import "./globals.css";
import { Roboto } from 'next/font/google';
import { Header, MobileHeader, Footer, GoogleCaptchaWrapper } from "./components";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
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
