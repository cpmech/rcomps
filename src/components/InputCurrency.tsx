import React, { useState } from 'react';
import { formatCurrency } from '../helpers';

interface IInputCurrencyProps {
  unit?: string; // e.g. US$ [default], R$
  separator?: string; // e.g. . [default] or , [default]
}

export const InputCurrency: React.FC<IInputCurrencyProps> = ({ unit = 'US$', separator = '.' }) => {
  const [value, setValue] = useState(unit + ' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const v = formatCurrency(e.target.value);
    /*
    let v = e.target.value.replace(/[\D\s._-]+/g, '');
    if (v.length > 2) {
      // v = v.slice(0, v.length - 2) + separator + v.slice(v.length - 2, v.length);

      console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v));
    }
    */
    setValue(v);
  };

  return <input type="text" name="currency" value={value} onChange={handleChange} />;
};
