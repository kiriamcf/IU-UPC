import Link from 'next/link'
import Image from 'next/image'
import {BiUserCircle} from 'react-icons/bi';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import LoginDropdown from './logindropdown';
import GenericDropdown from './genericdropdown';
import CartIcon from './carticon'; 

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full h-[67px] py-4 px-8 flex items-center justify-between">
      <nav className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
          </Link>
          <GenericDropdown />
          <Link href="/reserva" className="hidden md:inline-block uppercase text-lg transition-colors hover:text-primary">
            Reservar taula
          </Link>
          <Link href="/carta" className="hidden md:inline-block uppercase text-lg transition-colors hover:text-primary">
            Carta
          </Link>
        </div>
        {session ? (
          <div className='flex gap-4 items-center'>
            <Link href='/cart'>
              <CartIcon />
            </Link>
            <LoginDropdown name={session.user.name} imageUrl={session.user.image} />
          </div>
        ) : (
          <div>
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
            <BiUserCircle size={40} className='md:hidden cursor-pointer hover:text-primary' />
          </div>
        )}
      </nav>
    </header>
  );
}