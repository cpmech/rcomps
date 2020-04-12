import React from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { Switch } from './Switch';

const styleRoot = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  text: string;
  on: boolean;
  onClick: () => void;
  textAtRight?: boolean;
  textStyle?: SerializedStyles;
  hgap?: number;
  switchHeight?: number;
}

export const SwitchAndText: React.FC<IProps> = ({
  text,
  on,
  onClick,
  textAtRight,
  textStyle,
  hgap = 10,
  switchHeight = 24,
}) => {
  const styleAtLeft = css`
    margin-left: ${hgap}px;
  `;

  const styleAtRight = css`
    margin-left: ${hgap}px;
  `;

  if (textAtRight) {
    return (
      <div css={styleRoot}>
        <Switch on={on} height={switchHeight} onClick={onClick} />
        <div css={styleAtRight}>
          <div css={textStyle}>{text}</div>
        </div>
      </div>
    );
  }

  return (
    <div css={styleRoot}>
      <div css={styleAtLeft}>
        <div css={textStyle}>{text}</div>
      </div>
      <Switch on={on} height={switchHeight} onClick={onClick} />
    </div>
  );
};
