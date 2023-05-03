'use client'

import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import Button from '../components/button'
import { useState } from 'react'

function Card({image, name, price, description, data}) {

  const [isFlipped, setFlipped] = useState(false);

  const toggleCard = () => {
    setFlipped(!isFlipped);
  };

  return ( 
    <article className='relative rounded-md shadow-md bg-stone-50'>
      <div style={{ backgroundColor: "#333" }} className={`p-4 text-custom-gray2 rounded-md absolute inset-0 z-10 transition-opacity duration-500 ${isFlipped ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
        <ul>
          <li>
            Al·lergògen 1
          </li>
          <li>
            Al·lergògen 2
          </li>
          <li>
            Al·lergògen 3
          </li>
        </ul>
      </div>
      <div className='relative rounded-t-md overflow-hidden'>
        <Image className='duration-500 transition-transform hover:scale-125' src={image} alt="Exemple carta" width={500} height={500}/>
        <FaInfoCircle onClick={toggleCard} size={20} className='absolute top-1.5 right-1.5 z-20 text-stone-50'/>
      </div>
      <div className='p-4 flex flex-col gap-1'>
        <div className='flex justify-between'>
          <p className='font-bold'>
            {name}
          </p>
          <p className='font-bold'>
            {price}€
          </p>
        </div>
        <p className="mb-4">
          {description}
        </p>
        <Button text="Afegir" />
      </div>
    </article>
  );
}

export default Card;