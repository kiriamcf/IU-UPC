import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { CiMenuBurger } from 'react-icons/ci';
import {BsSearch} from 'react-icons/bs'
import {IoFilter} from 'react-icons/io5'
import Card from '../components/card'
import Search from '../components/search'
import PriceFilter from '../components/pricefilter';

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
        {/* CATEGORIES I BUSCADOR */}
        <div style={{backgroundColor: '#333'}} className='mb-7 p-4 flex justify-between items-center rounded'>
          <div className='md:hidden'>
            <IoFilter size={20} className='text-custom-gray2 cursor-pointer hover:text-hover-gray transition' />
          </div>
          <div className='flex gap-10 text-custom-gray2'>
            <Link href="/carta" className='uppercase text-sm hover:text-hover-gray transition'>
              Esmorzar
            </Link>
            <Link href="/carta" className='uppercase text-sm hover:text-hover-gray transition'>
              Dinar
            </Link>
            <Link href="/carta" className='uppercase text-sm hover:text-hover-gray transition'>
              Begudes
            </Link>
          </div>
          <div className='hidden md:block'>
            <Search placeholder='Producte' />
          </div>
          <div className='md:hidden'>
            <BsSearch className='text-custom-gray2 cursor-pointer hover:text-hover-gray transition' />
          </div>
        </div>

        
        <div className='flex gap-4'>
          {/* FILTRES */}
          <div className='hidden md:block w-64'>
            <div className='flex gap-4 justify-between pb-2'>
              <h1 className='text-black text-sm font-semibold uppercase'>
                Filtres
              </h1>
              <button className='py-0 px-0 text-primary text-xs object-contain hover:text-primary-hover transition'>
                Restablir filtres
              </button>
            </div>
            <div className='divide-y text-xs'>
              <div className='py-2'>
                <h2 className='font-medium uppercase'>Preu</h2>
                <div className='py-2'>
                  <PriceFilter maxValue={15} minValue={0} step={0.05} />
                </div>
              </div>
              <div className='py-2'>
                <h2 className='font-medium uppercase'>Categoria</h2>
                <ul className='grid gap-2 py-2'>
                  <li className='flex gap-1 items-center'>
                    <input type="checkbox" className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary" id="01" name="01" value="01"/>
                    <label htmlFor="01" className='flex gap-1 items-center hover:cursor-pointer'>
                      <span>
                        Vegetarià
                      </span>
                      <Image src="/vege.svg" alt="Logo vegetable" width={14} height={14} />
                    </label>
                  </li>
                  <li className='flex gap-1 items-center'>
                    <input type="checkbox" className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary" id="02" name="02" value="02"/>
                    <label htmlFor="02" className='flex gap-1 items-center hover:cursor-pointer'>
                      <span>
                        Vegà
                      </span>
                      <Image src="/vege.svg" alt="Logo vegetable" width={14} height={14} />
                    </label>
                  </li>
                </ul>
              </div>
              <div className='py-2'>
                <h2 className='font-medium uppercase'>Al·lergògens</h2>
                <ul className='grid gap-2 py-2'>
                  <li className='flex gap-1 items-center'>
                    <input type="checkbox" className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary" id="03" name="03" value="03"/>
                    <label htmlFor="03" className='flex gap-1 items-center hover:cursor-pointer'>
                      <span>
                        Sense gluten
                      </span>
                      <Image src="/gluten.svg" alt="Logo sense gluten" width={14} height={14} />
                    </label>
                  </li>
                  <li className='flex gap-1 items-center'>
                    <input type="checkbox" className="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary" id="04" name="04" value="04"/>
                    <label htmlFor="04" className='flex gap-1 items-center hover:cursor-pointer'>
                      <span>
                        Sense lactosa
                      </span>
                      <Image className='h-4' src="/lactose.svg" alt="Logo sense lactosa" width={14} height={14} />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* GRID PRODUCTES */}
          <div className='flex-1'>
            <ul className='grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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