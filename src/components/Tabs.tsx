import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IMenuEntry } from './MenuVertical';

export interface ITabsProps {
  entries: IMenuEntry[];

  bgColor: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;

  width?: string;
  height?: string;
  tabMinWidth?: number;

  marginTop?: number;
  marginBottom?: number;
  marginHoriz?: number;
  gapHorizLabel?: number;
  entryPaddingVert?: number;
  entryPaddingHoriz?: number;

  borderWidth?: number;
  borderRadius?: number;
}

export const Tabs: React.FC<ITabsProps> = ({
  entries,

  bgColor = 'white',
  color = '#484848',
  colorHover = '#757575',
  colorActive = '#17b580',

  width = '100%',
  height = '100%',
  tabMinWidth,

  marginTop = 10,
  marginBottom = 0,
  marginHoriz = 0,
  gapHorizLabel = 10,
  entryPaddingVert = 6,
  entryPaddingHoriz = 12,

  borderWidth = 1,
  borderRadius = 8,
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
      margin-top: ${marginTop}px;
      margin-bottom: ${marginBottom}px;
      margin-left: ${marginHoriz}px;
      margin-right: ${marginHoriz}px;
      ${bgColor ? `background-color: ${bgColor};` : ''}
      display:flex;
      justify-content: center;
      align-items: flex-end;
      border-bottom: ${borderWidth}px solid ${colorActive};
    `,

    container: css`
      width: ${width};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,

    entryContainer: css`
      position: relative;
      ${tabMinWidth ? `min-width: ${tabMinWidth}px;` : ''}
    `,

    entry: css`
      color: ${color};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
      padding: ${entryPaddingVert}px ${entryPaddingHoriz}px;
    `,

    entryActive: css`
      color: ${colorActive};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: ${entryPaddingVert}px ${entryPaddingHoriz}px;
      border-left: ${borderWidth}px solid ${colorActive};
      border-right: ${borderWidth}px solid ${colorActive};
      border-top: ${borderWidth}px solid ${colorActive};
      border-top-left-radius: ${borderRadius}px;
      border-top-right-radius: ${borderRadius}px;
    `,

    entryActiveBorder: css`
      position: absolute;
      width: calc(100% - ${borderWidth}px - ${borderWidth}px);
      left: ${borderWidth}px;
      bottom: -${borderWidth}px;
      height: ${borderWidth}px;
      background-color: ${bgColor};
    `,

    hspace: css`
      margin-left: ${gapHorizLabel}px;
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {entries.map((entry, i) => (
          <div key={i} css={styles.entryContainer}>
            {i === indexActive && <div css={styles.entryActiveBorder} />}

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
                {entry.icon && <span css={styles.hspace} />}
                <span>{entry.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
