/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { ITypeAProps, getTypeAcss } from '../helpers';

export interface IInputTypeAProps extends ITypeAProps {
  inputRef?: (e: HTMLInputElement) => void;
  name?: string;
  label?: string;
  value?: string;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  password?: boolean;
  suffix?: ReactNode;
  suffixPaddingRight?: number;
  readOnly?: boolean;
}

export const InputTypeA: React.FC<IInputTypeAProps> = ({
  inputRef,
  name,
  label,
  value,
  defaultValue,
  onChange,
  onBlur,
  password,
  suffix,
  suffixPaddingRight = 20,
  readOnly = false,
  ...rest
}) => {
  const root = getTypeAcss(readOnly, false, rest);
  const { fontSize = 18, height = 50, mutedColor = '#898989' } = rest;
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
            line-height: ${fontSize}px;
            top: ${height / 2 - fontSize / 2}px;
            right: ${suffixPaddingRight}px;
            color: ${mutedColor};
          `}
        >
          {suffix}
        </div>
      )}
    </div>
  );
};
