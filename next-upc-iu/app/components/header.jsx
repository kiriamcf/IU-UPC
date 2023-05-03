import Link from 'next/link'
import Image from 'next/image'
import { CiMenuBurger } from 'react-icons/ci';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import LoginDropdown from './logindropdown';

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full h-[67px] py-4 px-8 flex items-center justify-between">
      <nav className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
          </Link>
          <Link href="/carta" className="hidden md:inline-block uppercase text-xl transition-colors hover:text-primary">
            Carta
          </Link>
        </div>
        {session ? (
          <LoginDropdown name={session.user.name} imageUrl={session.user.image} />
        ) : (
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
        )}
        <CiMenuBurger size={30} className="md:hidden cursor-pointer hover:text-primary"/>
      </nav>
    </header>
  );
}