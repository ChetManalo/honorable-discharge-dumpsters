import "./globals.css";
import { Header, MobileHeader, Footer, GoogleCaptchaWrapper } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
