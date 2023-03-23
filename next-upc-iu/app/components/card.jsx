import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import Button from '../components/button'

function Card({imatge, nom, preu, descripcio}) {
  return (
    <article className='bg-stone-50 rounded-md shadow-md'>
      <div className='relative rounded-t-md overflow-hidden'>
        <Image className='duration-500 transition-transform hover:scale-125' src={imatge} alt="Exemple carta" width={800} height={600}/>
        <FaInfoCircle size={20} className='absolute top-1.5 right-1.5 text-stone-50'/>
      </div>
      <div className='p-4 flex flex-col gap-1'>
        <div className='flex justify-between'>
          <p className='font-bold'>
            {nom}
          </p>
          <p className='font-bold'>
            {preu}€
          </p>
        </div>
        <p className="mb-4">
          {descripcio}
        </p>
        <Button text="Afegir" />
      </div>
    </article>
  );
}

export default Card;