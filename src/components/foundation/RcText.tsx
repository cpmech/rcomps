/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { inputElementCss, RcInputElementCssOptions } from './inputElementCss';

export interface RcTextProps extends RcInputElementCssOptions {
  name?: string;
  label?: string;
  value?: string;
  suffix?: ReactNode;
  suffixPaddingRight?: string;
}

export const RcText: React.FC<RcTextProps> = ({
  name,
  label,
  value,
  suffix,
  suffixPaddingRight = '20px',
  ...rest
}) => {
  const root = inputElementCss(true, false, rest);
  const { fontSize = '18px', height = '50px', mutedColor = '#898989' } = rest;
  return (
    <div css={root}>
      <input name={name} required={true} type="text" value={value} readOnly={true} />
      <label placeholder={label}></label>
      {suffix && (
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize};
            top: calc(${height} / 2 - ${fontSize} / 2);
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
