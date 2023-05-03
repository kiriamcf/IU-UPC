'use client'

import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { useState } from 'react';

export default function LoginDropdown({name, imageUrl}) {

  const [stateDropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!stateDropdown);
  }

  return (
    <div className='relative'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-full' src={imageUrl} alt="Imagen de perfil" width={32} height={32} />
        <div onClick={handleDropdown}  className='flex cursor-pointer hover:text-primary'>
          <p className='font-medium select-none'>
            {name}
          </p>
          <MdOutlineArrowDropDown size={24} />
        </div>
      </div>

      <div className={`absolute w-48 p-2 bg-white rounded shadow-md border right-0 mt-[12px] z-10 transition-all duration-250 ${stateDropdown ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <ul className='text-sm text-gray-700'>
          <li className='pb-1 hover:underline'>
            <Link href='#'>
              Perfil
            </Link>
          </li>
          <li className='pb-1 hover:underline'>
            <Link href='#'>
              Tancar sessió
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}