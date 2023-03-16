import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/slider'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { CiMenuBurger } from 'react-icons/ci';

export default function Home() {
  return (
    <>
      <header className="w-full py-4 px-8 flex items-center justify-between">
        <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
        <nav className="w-full pl-4 flex items-center md:justify-between justify-end">
          <Link href="#" className="hidden md:inline-block uppercase text-xl transition-colors hover:text-primary">
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
        <div className="w-full h-almost max-w-xs mx-auto">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-6 mt-8">
                <div className="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="exemple@email.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Contrasenya
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-primary-fill hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-primary-fill hover:text-primary" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
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
