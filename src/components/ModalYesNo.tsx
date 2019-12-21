import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Button, IButtonProps } from './Button';
import { Modal, IModalProps } from './Modal';

interface IModalYesNoProps extends IModalProps {
  onYes: () => void;
  txtYes?: string;
  txtNo?: string;
  message?: string;
  colorNo?: string;
  noAtLeft?: boolean;
  msgBtnGap?: number;
  btnWidth?: string;
  leftButtonStyle?: IButtonProps;
  rightButtonStyle?: IButtonProps;
}

export const ModalYesNo: React.FC<IModalYesNoProps> = ({
  onYes,
  title = 'Confirmation',
  txtYes = 'Yes',
  txtNo = 'No',
  message,
  colorNo = '#e62739',
  noAtLeft,
  msgBtnGap = 30,
  btnWidth,
  children,
  leftButtonStyle,
  rightButtonStyle,
  ...rest
}) => {
  return (
    <Modal title={title} {...rest}>
      <div
        css={css`
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      >
        {message ? (
          <p
            css={css`
              ${msgBtnGap ? `margin-bottom:${msgBtnGap}px;` : ''}
            `}
          >
            {message}
          </p>
        ) : (
          children
        )}
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            ${noAtLeft ? `flex-flow: row-reverse;` : ''}
          `}
        >
          <Button
            onClick={() => {
              rest.onClose();
              onYes();
            }}
            outline={true}
            color={colorNo}
            width={btnWidth}
            {...leftButtonStyle}
          >
            {txtYes}
          </Button>
          <Button onClick={rest.onClose} outline={true} width={btnWidth} {...rightButtonStyle}>
            {txtNo}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
