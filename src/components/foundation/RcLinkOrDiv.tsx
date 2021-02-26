/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RcLinkOrDivProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
  underline?: boolean;
  cssExtra?: string;
}

export const RcLinkOrDiv: React.FC<RcLinkOrDivProps> = ({
  href,
  onClick,
  color = '#343434',
  hoverColor = '#c7c7c7',
  underline,
  cssExtra,
  children,
}) => {
  const style = css`
    color: ${color};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: ${hoverColor};
      background-image: none;
    }
    ${underline ? 'text-decoration: underline;' : ''}
    ${cssExtra ? cssExtra : ''}
  `;

  if (href) {
    return (
      <a href={href} css={style}>
        {' '}
        {children}{' '}
      </a>
    );
  }

  return (
    <div onClick={onClick} css={style}>
      {children}
    </div>
  );
};
