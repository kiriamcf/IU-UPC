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

      <main className='pt-7 pb-10 px-5'>
        <div>
          categorias y buscador
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-2'>
            <div className='px-4 py-3 shadow-md'>
              <h1 className='text-slate-500 text-sm uppercase'>
                Filtrar productes
              </h1>
              <div className='divide-y text-xs font-medium'>
                <div className='grid gap-2 py-2 uppercase'>
                  <h2>Preu</h2>
                  <input type="range" className="" min="0" max="1000" step="10"/>
                  <span>xd</span>
                </div>
                <div className='grid gap-2 py-2 uppercase'>
                  <h2>Categoria</h2>
                  <ul className='grid gap-2'>
                    <li className='flex gap-1 hover:cursor-pointer'>
                      <input type="checkbox" className="appearance-none h-2 w-2 bg-gray-200 rounded-full checked:bg-primary" id="01" name="01" value="01"/>
                      <label for="01">01</label>
                    </li>
                    
                  </ul>
                </div>
                <div className='grid gap-2 py-2 uppercase'>
                  <h2>Al·lergògens</h2>
                </div>
              </div>
            </div>
          </div>
          <ul className='grid gap-4 col-span-10 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
            <li>
              <Card imatge="/example.jpg" nom="Exemple" preu="3.50" descripcio="Això és un text" />
            </li>
          </ul>
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