'use client'

import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { CiMenuBurger } from 'react-icons/ci';
import { useTranslation } from "@/app/i18n/client";

export default function GenericDropdown({lng}) {
  const { t } = useTranslation(lng)
  const [genericDropdown, setGenericDropdown] = useState(false);

  const handleGenericDropdown = () => {
    setGenericDropdown(!genericDropdown);
  }

  return (
    <div className="relative">
      <CiMenuBurger size={30} className="md:hidden cursor-pointer hover:text-primary" onClick={handleGenericDropdown}/>
      <div 
      className={`absolute top-[120%] md:hidden flex flex-col gap-2 w-fit left-[50%] translate-x-[-50%] p-4 bg-white rounded shadow-md border right-0 z-30 transition-all duration-250 ${genericDropdown ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <Link href={`/${lng}/reserva`} className="w-full uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
          {t('header_book_table')}
        </Link>
        <Link href={`/${lng}/carta`} className="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
          {t('header_card')}
        </Link>
      </div>
    </div>
  );
}