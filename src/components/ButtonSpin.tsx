import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IButtonProps, Button } from './Button';
import { Spinner } from './Spinner';

interface IButtonSpinProps extends IButtonProps {
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
          <Spinner size={height && height > 25 ? height - 15 : 25} color={colorSpinner} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
