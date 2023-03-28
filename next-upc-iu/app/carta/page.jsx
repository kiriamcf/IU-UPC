'use client';

import Footer from '../components/footer';
import Image from 'next/image'
import Link from 'next/link'
import {BsSearch} from 'react-icons/bs'
import {IoFilter} from 'react-icons/io5'
import Card from '../components/card'
import Search from '../components/search'
import PriceFilter from '../components/pricefilter';
import { useState, useMemo } from 'react';

export default function CardPage() {

  const [valueSlider, setValueSlider] = useState([0, 15]);

  const carta = useMemo(() => [
    {
      id: 1,
      image: "/example.jpg",
      name: "Test 1",
      price: 3.50,
      description: "asdsad"
    },
    {
      id: 2,
      image: "/example.jpg",
      name: "Test 2",
      price: 3,
      description: "asdasddsadas"
    },
    {
      id: 3,
      image: "/example.jpg",
      name: "Test 3",
      price: 5,
      description: "asdsaasdasasdd"
    },
    {
      id: 4,
      image: "/example.jpg",
      name: "Test 4",
      price: 2,
      description: "aad"
    },
    {
      id: 5,
      image: "/example.jpg",
      name: "Test 1",
      price: 3.50,
      description: "asdsad"
    },
    {
      id: 6,
      image: "/example.jpg",
      name: "Test 6",
      price: 6,
      description: "sd"
    },
    {
      id: 7,
      image: "/example.jpg",
      name: "Test 7",
      price: 5,
      description: "asdsaasdasasdd"
    },
    {
      id: 8,
      image: "/example.jpg",
      name: "Test 8",
      price: 10,
      description: "aad"
    },
  ], []);

  const filteredCarta = useMemo(() => carta.filter((e) => e.price >= valueSlider[0] && e.price <= valueSlider[1]) , [carta, valueSlider]);

  return (
    <>
    <div className="min-h-almostScreen">
      <main className='pb-10 px-5'>
        {/* CATEGORIES I BUSCADOR */}
        <div style={{backgroundColor: '#333'}} className='-mx-5 mb-7 p-4 flex justify-between items-center'>
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
        
        <div className='flex gap-8'>
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
                  <PriceFilter value={valueSlider} setValue={setValueSlider} />
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
              {filteredCarta.map(e => {
                return <li><Card image={e.image} name={e.name} price={e.price} description={e.description} /></li>
              })}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  )
}