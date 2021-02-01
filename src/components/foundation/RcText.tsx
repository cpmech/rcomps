/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { InputCssOptions, getInputCss } from './InputCssOptions';

export interface RcTextProps extends InputCssOptions {
  name?: string;
  label?: string;
  value?: string;
  suffix?: ReactNode;
  suffixPaddingRight?: number;
}

export const RcText: React.FC<RcTextProps> = ({
  name,
  label,
  value,
  suffix,
  suffixPaddingRight = 20,
  ...rest
}) => {
  const root = getInputCss(true, false, rest);
  const { fontSize = 18, height = 50, mutedColor = '#898989' } = rest;
  return (
    <div css={root}>
      <input name={name} required={true} type="text" value={value} readOnly={true} />
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
