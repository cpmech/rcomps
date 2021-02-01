/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from '../foundation/Link';

export interface IButtonLinkProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({
  href,
  onClick,
  color = '#343434',
  hoverColor = '#c7c7c7',
  children,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      css={css`
        color: ${color};
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          color: ${hoverColor};
          background-image: none;
        }
      `}
    >
      {children}
    </Link>
  );
};
