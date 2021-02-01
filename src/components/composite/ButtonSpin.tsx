/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IButtonProps, Button } from '../foundation/Button';
import { SpinDots } from '../foundation/SpinDots';

export interface IButtonSpinProps extends IButtonProps {
  spin?: boolean;
  colorSpinner?: string;
}

export const ButtonSpin: React.FC<IButtonSpinProps> = ({
  spin,
  colorSpinner = '#343434',
  children,
  ...rest
}) => {
  const { height } = rest;
  return (
    <Button {...rest}>
      {spin ? (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <SpinDots size={height && height > 25 ? height - 15 : 25} color={colorSpinner} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
