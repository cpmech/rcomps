import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Modal, IModalProps } from '../Modal';

interface IErrorModelProps extends IModalProps {
  title?: string;
  onClose: () => void;
  message?: string;
  colorTitle?: string;
}

export const ErrorModal: React.FC<IErrorModelProps> = ({
  title = 'Error',
  onClose,
  message,
  colorTitle = '#e62739',
  children,
  ...rest
}) => {
  return (
    <Modal
      onClose={onClose}
      title={title}
      titleStyle={css`
        color: ${colorTitle};
        font-weight: bold;
        font-size: 1.2em;
      `}
      {...rest}
    >
      {message ? (
        <p
          css={css`
            min-height: 100px;
            min-width: 300px;
          `}
        >
          {message}
        </p>
      ) : (
        children
      )}
    </Modal>
  );
};
