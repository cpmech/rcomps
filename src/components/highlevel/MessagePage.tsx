import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

interface IShowMessageProps {
  title?: string;
  message?: string;
  colorTitle?: string;
  colorMessage?: string;
  heightMenu?: number;
}

export const MessagePage: React.FC<IShowMessageProps> = ({
  title = 'Notificação',
  message = 'Estamos trabalhando nesta parte.',
  colorTitle = '#484848',
  colorMessage = '#5d5c61',
  heightMenu = 120,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: calc(100vh - ${heightMenu}px);
        max-width: 960px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <h3
        css={css`
          color: ${colorTitle};
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          color: ${colorMessage};
        `}
      >
        {message}
      </p>
    </div>
  );
};