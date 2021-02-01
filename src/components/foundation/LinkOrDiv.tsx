/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface ILinkOrDivProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
}

export const LinkOrDiv: React.FC<ILinkOrDivProps> = ({
  href,
  onClick,
  color = '#343434',
  hoverColor = '#c7c7c7',
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
