import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import ScrollToTop from "./ScrollToTop";


const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
