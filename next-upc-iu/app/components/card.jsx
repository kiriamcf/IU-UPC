import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import Button from '../components/button'

function Card({image, name, price, description}) {
  return (
    <article className='bg-stone-50 rounded-md shadow-md'>
      <div className='relative rounded-t-md overflow-hidden'>
        <Image className='duration-500 transition-transform hover:scale-125' src={image} alt="Exemple carta" width={500} height={500}/>
        <FaInfoCircle size={20} className='absolute top-1.5 right-1.5 text-stone-50'/>
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