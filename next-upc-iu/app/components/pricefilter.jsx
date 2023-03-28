'use client';

import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../../styles/pricefilter.css';

function PriceFilter({maxValue, minValue, step}) {
  const [value, setValue] = useState({ min: minValue, max: maxValue });

  const handleChange = (newValue) => { 
    setValue(newValue);
  };

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div className='w-48'>
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={value}
        step={step}
        onChange={handleChange}
      />
      </div>
      
      <div>
        Des de {value.min.toFixed(2)}€ a {value.max.toFixed(2)}€
      </div>
    </div>
  );
}

export default PriceFilter;