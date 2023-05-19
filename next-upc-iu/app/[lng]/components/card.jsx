'use client'

import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import Button from '../components/button'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext';
import { useTranslation } from "@/app/i18n/client";

function Card({id, image, name, price, description, allergies, session, lng, onAdd}) {
  const { t } = useTranslation(lng)
  const [isFlipped, setFlipped] = useState(false);
  const { userCart, setUserCart, setTotalPrice } = useContext(UserContext);

  const toggleCard = () => {
    setFlipped(!isFlipped);
  };

  const handleAddProduct = async () => {
    if (session){
      try {
        const data = {
          userId: session.user.id,
          productId: id
        };
        const res = await fetch('http://localhost:3000/api/users/cart', {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',         
            'Accept': 'application/json',
          },
        });
        if (res.ok) {
          const user = await res.json();
          const cart = user.cart;
          setUserCart(cart);
          onAdd();
        } else {
          console.log('Error');
        }
      } catch (error) {
        console.log('Error');
      }
    }
    else{
      console.log("No estas loguejat");
    }
  };

  return ( 
    <article className='relative rounded-md shadow-md bg-stone-50'>
      <div style={{ backgroundColor: "#333" }} className={`p-4 text-custom-gray2 rounded-md absolute inset-0 z-10 transition-opacity duration-500 ${isFlipped ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
        <ul>
          {
            Object.keys(allergies).map((key, i) => {
              if (allergies[key]) {
                return (
                  <li key={i} className='capitalize'>
                    {key}
                  </li>
                );
              }
            })
          }
        </ul>
      </div>
      <div className='relative rounded-t-md overflow-hidden'>
        <Image className='duration-500 transition-transform hover:scale-125 w-full h-64 object-cover' src={image} alt="Exemple carta" width={500} height={500}/>
        <FaInfoCircle onClick={toggleCard} size={20} className='absolute top-1.5 right-1.5 z-20 text-primary'/>
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
        <Button onClick={handleAddProduct} text={t('add_product')} />
      </div>
    </article>
  );
}

export default Card;