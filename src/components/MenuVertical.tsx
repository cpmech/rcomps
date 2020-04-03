import React, { useState, useEffect, ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
}

interface IMenuVerticalProps {
  entries: IMenuEntry[];
  iniActive?: number; // -1 => no active

  bgColor?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;

  minWidth?: number;
  maxWidth?: number;

  paddingVert?: number;
  paddingHoriz?: number;
  gapVertEntries?: number;
  gapHorizLabel?: number;
}

export const MenuVertical: React.FC<IMenuVerticalProps> = ({
  entries,
  iniActive = -1,

  bgColor,
  color = '#484848',
  colorHover = '#757575',
  colorActive = '#17b580',

  minWidth,
  maxWidth,

  paddingVert = 40,
  paddingHoriz = 20,
  gapVertEntries = 20,
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
      min-width: ${minWidth}px;
      max-width: ${maxWidth}px;
      padding: ${paddingVert}px ${paddingHoriz}px;
      ${bgColor ? `background-color: ${bgColor};` : ''}
    `,

    entryContainer: css`
      padding-top: ${gapVertEntries}px;
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
      {entries.map((entry, i) => (
        <div key={i} css={styles.entryContainer}>
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
  );
};
