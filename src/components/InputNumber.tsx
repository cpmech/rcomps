import React, { ReactNode } from 'react';
import { formatNumber } from '@cpmech/util';
import { ITypeAProps } from './styles';
import { InputTypeA } from './InputTypeA';

interface IInputNumberProps extends ITypeAProps {
  value: string;
  onChange: (formattedValue: string) => void;
  onBlur?: (formattedValue: string) => void;
  label?: string;
  prefix?: string; // e.g. '' [default] or 'R$ '
  suffix?: ReactNode;
  swapDotByComma?: boolean; // use ',' instead of '.' for decimals
  numDigits?: number; // number of decimal digits 2 = default
  suffixPaddingRight?: number;
}

export const InputNumber: React.FC<IInputNumberProps> = ({
  value,
  onChange,
  onBlur,
  label,
  prefix = '',
  suffix,
  swapDotByComma = false,
  numDigits = 2,
  suffixPaddingRight,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const v = formatNumber(e.target.value, swapDotByComma, numDigits, prefix);
    onChange(v);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      e.preventDefault();
      const v = formatNumber(e.target.value, swapDotByComma, numDigits, prefix);
      onBlur(v);
    }
  };

  return (
    <InputTypeA
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={onBlur ? handleBlur : undefined}
      suffix={suffix}
      suffixPaddingRight={suffixPaddingRight}
      {...rest}
    />
  );
};
