import React, { useState, useEffect, ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  active?: boolean;
}

interface IMenuVerticalProps {
  entries: IMenuEntry[];

  bgColor?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;
  colorActiveHover?: string;

  minWidth?: number;
  maxWidth?: number;

  paddingVert?: number;
  paddingHoriz?: number;
  gapVertEntries?: number;
  gapHorizLabel?: number;
}

export const MenuVertical: React.FC<IMenuVerticalProps> = ({
  entries,

  bgColor,
  color = '#484848',
  colorHover = '#757575',
  colorActive = '#17b580',
  colorActiveHover = '#33e5a9',

  minWidth,
  maxWidth,

  paddingVert = 40,
  paddingHoriz = 20,
  gapVertEntries = 20,
  gapHorizLabel = 10,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    const idx = entries.findIndex(e => e.active);
    if (idx > 0) {
      setIndexActive(idx);
    }
  }, [entries]);

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
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    entryActive: css`
      color: ${colorActive};
      display: flex;
      flex-direction: row;
      cursor: pointer;
      :hover {
        color: ${colorActiveHover};
      }
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
  );
};
