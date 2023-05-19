import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { useTranslation } from '@/app/i18n';

async function Footer({lng}) {
  const { t } = await useTranslation(lng);
  return (
    <footer className="bg-custom-black py-10 flex justify-evenly mt-auto">
        <div>
        <p className="uppercase mb-1 text-white text-sm font-bold">
            {t('footer_card_title')}
        </p>
        <ul>
            <li>
            <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href={`/${lng}/reserva`}>
                {t('header_book_table')}
            </Link>
            </li>
            <li>
            <Link className="uppercase text-custom-gray text-xs hover:text-gray-300" href={`/${lng}/carta`}>
                {t('header_card')}
            </Link>
            </li>
        </ul>
        </div>
        <div>
        <p className="uppercase mb-1 text-white text-sm font-bold">
            {t('footer_call_us_title')}
        </p>
        <address className="text-white text-sm">
            <p>
            (+34) 666 666 666
            </p>
        </address>
        </div>
        <div>
        <p className="uppercase mb-1 text-white text-sm font-bold">
          {t('footer_follow_us_title')}
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