import {BsSearch} from 'react-icons/bs'

function Search({placeholder, value, setValue}) {

  return (
    <div className='relative group w-full'>
      <div className='py-2 flex items-center gap-2 text-sm text-gray-400 border-b-2 border-gray-400'>
        <BsSearch className='group-focus-within:text-primary transition-colors duration-300 group-valid:text-primary' />
        <input className='bg-transparent focus:outline-none placeholder-gray-400 focus:text-primary valid:text-primary' type='text' placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
      </div>
      <div className='absolute bottom-0 w-full h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300'></div>
    </div>  
  );
}

export default Search;

