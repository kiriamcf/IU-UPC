import {BsSearch} from 'react-icons/bs'

function Search({placeholder}) {
  return (
    <div className='relative group w-56'>
      <div className='py-2 flex items-center gap-2 text-sm text-gray-400 border-b-2 border-gray-400'>
        <BsSearch className='group-focus-within:text-gray-50 transition-colors duration-300 group-valid:text-gray-50' />
        <input className='bg-transparent focus:outline-none placeholder-gray-400 focus:text-gray-50 valid:text-gray-50' type='text' placeholder={placeholder}/>
      </div>
      <div className='absolute bottom-0 w-full h-0.5 bg-gray-50 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300'></div>
    </div>  
  );
}

export default Search;

