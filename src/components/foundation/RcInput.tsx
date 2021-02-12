/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { inputElementCss, RcInputElementCssOptions } from './inputElementCss';

export interface RcInputProps extends RcInputElementCssOptions {
  inputRef?: (e: HTMLInputElement) => void;
  name?: string;
  label?: string;
  value?: string;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  password?: boolean;
  suffix?: ReactNode;
  suffixPaddingRight?: string;
  readOnly?: boolean;
}

export const RcInput: React.FC<RcInputProps> = ({
  inputRef,
  name,
  label,
  value,
  defaultValue,
  onChange,
  onBlur,
  password,
  suffix,
  suffixPaddingRight = '20px',
  readOnly = false,
  ...rest
}) => {
  const root = inputElementCss(readOnly, false, rest);
  const { fontSize = '18px', height = '50px', mutedColor = '#898989' } = rest;
  return (
    <div css={root}>
      <input
        ref={inputRef}
        name={name}
        required={true}
        type={password ? 'password' : 'text'}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      <label placeholder={label}></label>
      {suffix && (
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize};
            top: calc((${height} - ${fontSize}) / 2);
            right: ${suffixPaddingRight};
            color: ${mutedColor};
          `}
        >
          {suffix}
        </div>
      )}
    </div>
  );
};
