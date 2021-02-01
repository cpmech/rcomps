/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

export interface IPairProps {
  left: ReactNode;
  right: ReactNode;
  spacing?: number;
  spaceBetween?: boolean;
  cssLeft?: string;
  cssRight?: string;
}

export const Pair: React.FC<IPairProps> = ({
  left,
  right,
  spacing = 10,
  spaceBetween,
  cssLeft = '',
  cssRight,
}) => {
  cssLeft += `; padding-right: ${spacing}px;`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: spaceBetween ? 'space-between' : 'center',
        alignItems: 'center',
        lineHeight: 0,
      }}
    >
      {cssLeft ? <span css={css(cssLeft)}>{left}</span> : <span>{left}</span>}
      {cssRight ? <span css={css(cssRight)}>{right}</span> : <span>{right}</span>}
    </div>
  );
};
