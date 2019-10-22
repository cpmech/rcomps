import React, { useState } from 'react';
import { formatCurrency } from './helpers';

interface IInputCurrencyProps {
  prefix?: string; // e.g. '$ ' [default] or 'R$ '
  swapDotByComma?: boolean; // use ',' instead of '.' for decimals
}

export const InputCurrency: React.FC<IInputCurrencyProps> = ({
  prefix = '$ ',
  swapDotByComma = false,
}) => {
  const [value, setValue] = useState(prefix);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const v = formatCurrency(e.target.value, prefix, swapDotByComma);
    setValue(v);
  };

  return <input type="text" name="currency" value={value} onChange={handleChange} />;
};
