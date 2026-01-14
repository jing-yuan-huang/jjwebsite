import "./globals.css";
import Header from "../components/Header";
import { Archivo } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className={archivo.variable}>
      
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
