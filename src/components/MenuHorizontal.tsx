import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IMenuEntry } from './MenuVertical';

export interface IMenuHorizontalProps {
  entries: IMenuEntry[];

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
  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    const idx = entries.findIndex((e) => e.active);
    if (idx > 0) {
      setIndexActive(idx);
    }
  }, [entries]);

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
                  if (i === indexActive) {
                    return;
                  }
                  setIndexActive(i);
                  if (entry.onClick) {
                    entry.onClick();
                  }
                }}
              >
                {entry.icon}
                <span css={styles.label}>{entry.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
