/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { SpinDots } from './SpinDots';

export interface IRcButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: string;
  height?: number;
  paddingLeft?: number;
  paddingRight?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  colorDisabled?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverColorOutline?: string;
  spinning?: boolean;
  disabled?: boolean;
  outline?: boolean;
  flatLeft?: boolean;
  flatRight?: boolean;
  icon?: ReactNode;
}

export const RcButton: React.FC<IRcButtonProps> = ({
  href,
  type = 'button',
  onClick,
  width,
  height = 40,
  paddingLeft = 28,
  paddingRight = 28,
  borderRadius = 6,
  fontSize = 0, // optional
  fontWeight = 'normal',
  color = '#343434',
  colorDisabled = '#666666',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  hoverColorOutline = '#efefef',
  spinning,
  disabled,
  outline,
  flatLeft,
  flatRight,
  icon,
  children,
}) => {
  const style = css`
    ${width ? `width: ${width};` : ''}
    height: ${height}px;
    padding-left: ${paddingLeft}px;
    padding-right: ${paddingRight}px;
    border-radius: ${borderRadius}px;
    ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
    ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
    border-width: 0;
    ${fontSize ? `font-size: ${fontSize}px;` : ''}
    font-weight: ${fontWeight};
    color: ${disabled ? colorDisabled : color};
    ${!disabled ? `cursor: pointer` : ''};
    ${!disabled ? `&:hover { background-color: ${outline ? hoverColorOutline : hoverColor}; }` : ''}
    ${outline ? `border: 1px solid ${color};` : ''}
    ${outline ? `background-color: rgba(0,0,0,0);` : `background-color: ${backgroundColor};`}
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
  `;

  return (
    <button
      css={style}
      disabled={disabled}
      type={type}
      onClick={(e) => {
        e.preventDefault();
        if (href) {
          window.location.href = href;
        } else if (onClick) {
          onClick(e);
        }
        return false;
      }}
    >
      {icon || spinning ? (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {spinning ? (
            <SpinDots size={height && height > 25 ? height - 15 : 25} color={color} />
          ) : (
            icon
          )}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
