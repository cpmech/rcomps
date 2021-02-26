/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { RcLinkOrDiv } from '../foundation';

export interface RcPairLinkOrDivProps {
  href?: string;
  onClick?: () => void;
  left: ReactNode;
  right: ReactNode;
  color?: string;
  hoverColor?: string;
  gap?: string;
  wordBreak?: boolean;
  cssExtraLeft?: string;
  cssExtraRight?: string;
}

export const RcPairLinkOrDiv: React.FC<RcPairLinkOrDivProps> = ({
  href,
  onClick,
  left,
  right,
  color = '#255fdf',
  hoverColor = '#92aeef',
  gap = '10px',
  wordBreak,
  cssExtraLeft,
  cssExtraRight,
}) => {
  const cssRoot = css`
    ${wordBreak ? `word-break: break-all;` : ''}
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${gap};
  `;

  const cssLeft = cssExtraLeft
    ? css`
        ${cssExtraLeft}
      `
    : undefined;

  const cssRight = cssExtraRight
    ? css`
        ${cssExtraRight}
      `
    : undefined;

  return (
    <RcLinkOrDiv href={href} onClick={onClick} color={color} hoverColor={hoverColor}>
      <div css={cssRoot}>
        <div css={cssLeft}>{left}</div>
        <div css={cssRight}>{right}</div>
      </div>
    </RcLinkOrDiv>
  );
};
