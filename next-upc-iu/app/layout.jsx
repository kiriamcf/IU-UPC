import './globals.css'
import "tailwindcss/tailwind.css";
import { Montserrat } from "next/font/google";
import Image from 'next/image'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci';

export const metadata = {
  title: 'Restaurant de l’Epsem',
  description: 'RESTAURANT DE L’EPSEM',
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="w-full py-4 px-8 flex items-center justify-between">
          <nav className="w-full pl-4 flex items-center md:justify-between justify-end">
            <div className="flex gap-4 items-center">
              <Link href="/" className="hidden md:inline-block uppercase text-xl transition-colors hover:text-primary">
                <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
              </Link>
              <Link href="/carta" className="hidden md:inline-block uppercase text-xl transition-colors hover:text-primary">
                Carta
              </Link>
            </div>
            <ul className="hidden md:flex items-center gap-4">
              <li className="uppercase text-xl transition-colors hover:text-primary">
                <Link href="/login">
                  Login
                </Link>
              </li>
              <li className="uppercase text-xl transition-colors hover:text-primary">
                <Link href="/register">
                  Register
                </Link>
              </li>
            </ul>
            <CiMenuBurger size={30} className="md:hidden cursor-pointer hover:text-primary"/>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
