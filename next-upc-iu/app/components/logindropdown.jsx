'use client'

import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { useState } from 'react';
import { signOut } from 'next-auth/react'

export default function LoginDropdown({name, imageUrl}) {

  const [stateDropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!stateDropdown);
  }

  const handleLogOut = () => {
    signOut('google');
  }

  return (
    <div className='relative'>
      <div>
        <div className='hidden md:flex items-center gap-2'>
          <Image className='rounded-full' src={imageUrl} alt="Imagen de perfil" width={32} height={32} />
          <div onClick={handleDropdown}  className='flex cursor-pointer hover:text-primary'>
            <p className='font-medium select-none'>
              {name}
            </p>
            <MdOutlineArrowDropDown size={24} />
          </div>
        </div>
        <Image onClick={handleDropdown} className='md:hidden rounded-full cursor-pointer' src={imageUrl} alt="Imagen de perfil" width={32} height={32} />
      </div>

      <div className={`absolute w-fit p-2 bg-white rounded shadow-md border right-0 mt-[12px] z-30 transition-all duration-250 ${stateDropdown ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <ul className='text-sm text-gray-700 flex flex-col gap-2 list-none'>
          <li>
            <Link href='#' className="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
              Perfil
            </Link>
          </li>
          <li>
            <a href='#' className="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap" onClick={handleLogOut}>
              Tancar sessió
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}