import Link from 'next/link'
import Image from 'next/image'
import {BiUserCircle} from 'react-icons/bi';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginDropdown from './logindropdown';
import GenericDropdown from './genericdropdown';
import CartIcon from './carticon';
import { useTranslation } from '@/app/i18n';

export default async function Header({ lng }) {
  const { t } = await useTranslation(lng);
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full h-[67px] py-4 px-8 flex items-center justify-between">
      <nav className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link href={`/${lng}`}>
            <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
          </Link>
          <GenericDropdown lng={lng}/>
          <Link href={`/${lng}/reserva`} className="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
            {t('header_book_table')}
          </Link>
          <Link href={`/${lng}/carta`} className="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
            {t('header_card')}
          </Link>
        </div>
        {session ? (
          <div className='flex gap-4 items-center'>
            <Link href={`/${lng}/cart`}>
              <CartIcon />
            </Link>
            <LoginDropdown name={session.user.name} imageUrl={session.user.image} lng={lng}/>
          </div>
        ) : (
          <div>
            <ul className="hidden md:flex items-center gap-4">
              <li className="uppercase underline text-xl transition-colors hover:text-primary">
                <Link href={`/${lng}/login`}>
                  Login
                </Link>
              </li>
              <li className="uppercase underline text-xl transition-colors hover:text-primary">
                <Link href={`/${lng}/register`}>
                  Register
                </Link>
              </li>
            </ul>
            <BiUserCircle size={40} className='md:hidden cursor-pointer hover:text-primary' />
          </div>
        )}
      </nav>
    </header>
  );
}