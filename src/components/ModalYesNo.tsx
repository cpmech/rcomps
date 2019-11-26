import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Button } from './Button';
import { Modal, IModalProps } from './Modal';

interface IModalYesNoProps extends IModalProps {
  onYes: () => void;
  txtYes?: string;
  txtNo?: string;
  message?: string;
  colorNo?: string;
  noAtLeft?: boolean;
  msgBtnGap?: number;
  minWidth?: number;
  btnWidth?: string;
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
  minWidth = 300,
  btnWidth,
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
        <p
          css={css`
            min-width: ${minWidth}px;
            ${msgBtnGap && `margin-bottom:${msgBtnGap}px;`}
          `}
        >
          {message}
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            ${noAtLeft && `flex-flow: row-reverse;`}
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
          >
            {txtYes}
          </Button>
          <Button onClick={rest.onClose} outline={true} width={btnWidth}>
            {txtNo}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
