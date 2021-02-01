/** @jsxImportSource @emotion/react */
import { getButtonCss } from '../styles';

export interface IButtonProps {
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
  disabled?: boolean;
  outline?: boolean;
  flatLeft?: boolean;
  flatRight?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
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
  disabled,
  outline,
  flatLeft,
  flatRight,
  children,
}) => {
  const buttonCss = getButtonCss(
    width,
    height,
    paddingLeft,
    paddingRight,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    colorDisabled,
    backgroundColor,
    hoverColor,
    hoverColorOutline,
    disabled,
    outline,
    flatLeft,
    flatRight,
  );

  return (
    <button
      css={buttonCss}
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
      {children}
    </button>
  );
};
