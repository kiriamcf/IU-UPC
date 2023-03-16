import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

function Card({imatge, nom, preu, descripcio}) {
  return (
    <article className='bg-gray-100 rounded-md border-2 border-solid border-gray shadow-md'>
      <div className='rounded-t-md overflow-hidden'>
        <Image className='rounded-t-md hover:scale-125' src={imatge} alt="Exemple carta" width={320} height={300}/>
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
        <p>
          {descripcio}
        </p>
        <div className='flex justify-center'>
          <button className='group flex justify-center items-center border-2 border-solid border-primary rounded-lg p-2 hover:bg-primary'>
            <span className='text-primary font-medium group-hover:text-gray-100'>Afegir</span>
            <IoIosArrowForward className='text-primary group-hover:text-gray-100 group-hover:translate-x-1.5' />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;