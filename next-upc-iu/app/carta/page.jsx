import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { CiMenuBurger } from 'react-icons/ci';
import Card from '../components/card'

export default function CardPage() {
  return (
    <>
      <header className="w-full py-4 px-8 flex items-center justify-between">
        <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
        <nav className="w-full pl-4 flex items-center md:justify-between justify-end">
          <Link href="/carta" className="hidden md:inline-block uppercase text-xl transition-colors hover:text-primary">
            Carta
          </Link>
          <ul className="hidden md:flex items-center gap-4">
            <li className="uppercase text-xl transition-colors hover:text-primary">
              <Link href="#">
                Login
              </Link>
            </li>
            <li className="uppercase text-xl transition-colors hover:text-primary">
              <Link href="#">
                Register
              </Link>
            </li>
          </ul>
          <CiMenuBurger size={30} className="md:hidden cursor-pointer hover:text-primary"/>
        </nav>
      </header>

      <main>
        <div className="pt-7 pb-10 gap-8 flex flex-wrap justify-center items-center">
          <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple2" preu="2.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple3" preu="1.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple4" preu="2.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple5" preu="1.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple6" preu="2.00" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple7" preu="3.00" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple8" preu="3.10" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple9" preu="2.50" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple10" preu="2.30" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple11" preu="3.30" descripcio="Això és un text" />
          <Card imatge="/example.jpg" nom="Exemple12" preu="1.00" descripcio="Això és un text" />
        </div>
      </main>

      <footer className="bg-custom-black py-10 flex justify-evenly">
        <div>
          <p className="uppercase mb-1 text-white text-sm font-bold">
            carta
          </p>
          <ul>
            <li>
              <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href="#">
                esmorzar
              </Link>
            </li>
            <li>
              <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href="#">
                dinar
              </Link>
            </li>
            <li>
              <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href="#">
                begudes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="uppercase mb-1 text-white text-sm font-bold">
            truca'ns
          </p>
          <address className="text-white text-sm">
            <p>
              (+34) 666 666 666
            </p>
          </address>
        </div>
        <div>
          <p className="uppercase mb-1 text-white text-sm font-bold">
            segueix-nos
          </p>
          <address className="text-custom-gray flex gap-4">
            <a className="hover:text-gray-300" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaTwitter />
            </a>
          </address>
        </div>
      </footer>
    </>
  )
}