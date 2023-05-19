import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-custom-black py-10 flex justify-evenly mt-auto">
        <div>
        <p className="uppercase mb-1 text-white text-sm font-bold">
            carta
        </p>
        <ul>
            <li>
            <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href="/reserva">
                reservar taula
            </Link>
            </li>
            <li>
            <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href="/carta">
                carta
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
  );
}

export default Footer;