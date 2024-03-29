/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { formatNumber } from '@cpmech/util';
import { RcInputElementCssOptions, RcInput } from '../foundation';

export interface RcInputNumberProps extends RcInputElementCssOptions {
  value: string;
  onChange: (formattedValue: string) => void;
  onBlur?: (formattedValue: string) => void;
  onEnterKeyUp?: () => void;
  label?: string;
  prefix?: string; // e.g. '' [default] or 'R$ '
  suffix?: ReactNode;
  swapDotByComma?: boolean; // use ',' instead of '.' for decimals
  numDigits?: number; // number of decimal digits 2 = default
  suffixPaddingRight?: string;
}

export const RcInputNumber: React.FC<RcInputNumberProps> = ({
  value,
  onChange,
  onBlur,
  onEnterKeyUp,
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
    <RcInput
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={onBlur ? handleBlur : undefined}
      onEnterKeyUp={onEnterKeyUp}
      suffix={suffix}
      suffixPaddingRight={suffixPaddingRight}
      {...rest}
    />
  );
};
