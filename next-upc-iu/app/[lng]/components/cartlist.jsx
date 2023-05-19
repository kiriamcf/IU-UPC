'use client'

import { useContext } from 'react';
import UserContext from '../context/UserContext';
import Image from 'next/image';
import { useTranslation } from "@/app/i18n/client";

function CartList({lng}) {
  const { t } = useTranslation(lng)
  const { userCart, setUserCart } = useContext(UserContext);

  return (
    <div>
      <table className="w-full text-center">
        <thead>
          <tr className="border-b-2">
            <th className='py-2'></th>
            <th className="py-2">{t('cart_product')}</th>
            <th className="py-2">{t('cart_price')}</th>
            <th className="py-2">{t('cart_quantity')}</th>
            <th className="py-2">{t('cart_total')}</th>
          </tr>
        </thead>
        <tbody>
          {userCart.map((item, i) => 
            <tr key={i} className='border-b font-medium'>
              <td className="py-2 w-24">
                <Image src={item.product.imgURL} width={100} height={100}/>
              </td>
              <td className="py-2">
                {item.product.name}
              </td>
              <td className="py-2">
                {item.product.price}€
              </td>
              <td className="py-2">
                {item.quantity}
              </td>
              <td className="py-2">
                {parseFloat((item.product.price)*(item.quantity)).toFixed(2)}€
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartList;