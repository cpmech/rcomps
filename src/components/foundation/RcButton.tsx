/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { RcSpinDots } from './RcSpinDots';

export interface RcButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: string;
  height?: string;
  paddingLeft?: string;
  paddingRight?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  colorDisabled?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverColorOutline?: string;
  spinDotsSize?: string;
  spinning?: boolean;
  disabled?: boolean;
  outline?: boolean;
  flatLeft?: boolean;
  flatRight?: boolean;
  icon?: ReactNode;
  focusOutline?: string;
}

export const RcButton: React.FC<RcButtonProps> = ({
  href,
  type = 'button',
  onClick,
  width,
  height = '40px',
  paddingLeft = '28px',
  paddingRight = '28px',
  borderRadius = '6px',
  fontSize,
  fontWeight = 'normal',
  color = '#343434',
  colorDisabled = '#666666',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  hoverColorOutline = '#efefef',
  spinDotsSize = '25px',
  spinning,
  disabled,
  outline,
  flatLeft,
  flatRight,
  icon,
  focusOutline = 'thin solid rgba(0, 0, 0, 0)',
  children,
}) => {
  const style = css`
    :focus {
      outline: ${focusOutline};
    }
    ${width ? `width: ${width};` : ''}
    height: ${height};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    border-radius: ${borderRadius};
    ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
    ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
    border-width: 0;
    ${fontSize ? `font-size: ${fontSize};` : ''}
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
          {spinning ? <RcSpinDots size={spinDotsSize} color={color} /> : icon}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
