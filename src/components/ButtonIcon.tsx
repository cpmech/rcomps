/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { IButtonProps, Button } from './Button';

interface IButtonIconProps extends IButtonProps {
  icon: ReactNode;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, ...rest }) => {
  return (
    <Button {...rest}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {icon}
      </div>
    </Button>
  );
};
