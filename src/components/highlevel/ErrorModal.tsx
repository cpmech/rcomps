import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Modal } from '../Modal';

interface IErrorModelProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  message: string;
  colorTitle?: string;
}

export const ErrorModal: React.FC<IErrorModelProps> = ({
  title = 'Error',
  isOpen,
  onClose,
  message,
  colorTitle = '#e62739',
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      titleStyle={css`
        color: ${colorTitle};
        font-weight: bold;
        font-size: 1.2em;
      `}
    >
      <p
        css={css`
          min-height: 100px;
          min-width: 300px;
        `}
      >
        {message}
      </p>
    </Modal>
  );
};
