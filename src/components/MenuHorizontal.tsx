import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IMenuEntry } from './MenuVertical';

export interface IMenuHorizontalProps {
  entries: IMenuEntry[];
  iniActive?: number; // -1 => no active

  bgColor?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;

  width?: string;
  height?: string;

  paddingVert?: number;
  paddingHoriz?: number;
  gapHorizLabel?: number;
}

export const MenuHorizontal: React.FC<IMenuHorizontalProps> = ({
  entries,
  iniActive = -1,

  bgColor,
  color = '#484848',
  colorHover = '#757575',
  colorActive = '#17b580',

  width = '100%',
  height = '100%',

  paddingVert = 5,
  paddingHoriz = 20,
  gapHorizLabel = 10,
}) => {
  const [indexActive, setIndexActive] = useState(-1);

  useEffect(() => {
    if (iniActive >= 0) {
      setIndexActive(iniActive);
    }
  }, [iniActive]);

  const styles = {
    root: css`
      height: ${height};
      padding: ${paddingVert}px ${paddingHoriz}px;
      ${bgColor ? `background-color: ${bgColor};` : ''}
      display:flex;
      justify-content: center;
      align-items: center;
    `,

    container: css`
      width: ${width};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,

    entry: css`
      color: ${color};
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    entryActive: css`
      color: ${colorActive};
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    `,

    label: css`
      margin-left: ${gapHorizLabel}px;
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {entries.map((entry, i) => (
          <div key={i}>
            {/* given component */}
            {entry.comp}

            {/* icon and label */}
            {(entry.icon || entry.label) && (
              <div
                css={i === indexActive ? styles.entryActive : styles.entry}
                onClick={() => {
                  setIndexActive(i);
                  if (entry.onClick) {
                    entry.onClick();
                  }
                }}
              >
                <div>{entry.icon}</div>
                <div css={styles.label}>{entry.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
