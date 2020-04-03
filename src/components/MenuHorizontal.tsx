import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IMenuEntry } from './MenuVertical';

export interface IMenuHorizontalProps {
  entries: IMenuEntry[];

  bgColor?: string;
  color?: string;
  colorHover?: string;

  width?: string;
  height?: string;

  paddingVert?: number;
  paddingHoriz?: number;
  gapVertSubEntries?: number;
  gapHorizLabel?: number;

  fontSizeSubEntries?: string;
}

export const MenuHorizontal: React.FC<IMenuHorizontalProps> = ({
  entries,

  bgColor,
  color = '#484848',
  colorHover = '#757575',

  width = '100%',
  height = '100%',

  paddingVert = 5,
  paddingHoriz = 20,
  gapVertSubEntries = 30,
  gapHorizLabel = 10,

  fontSizeSubEntries = '90%',
  //
}) => {
  //
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
      flex-wrap: wrap;
      > * {
        margin: 1em 0;
      }
    `,

    vspaceSub: css`
      padding-top: ${gapVertSubEntries}px;
    `,

    entry: css`
      color: ${color};
      display: grid;
      grid-template-columns: auto auto;
      justify-content: flex-start;
      align-items: center;
    `,

    label: css`
      margin-left: ${gapHorizLabel}px;
    `,

    labelHL: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel}px;
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel}px;
      font-size: ${fontSizeSubEntries};
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    iconSub: css`
      margin-right: ${gapHorizLabel}px;
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
              <div css={styles.entry}>
                <div>{entry.icon}</div>
                <div
                  css={entry.entries && !entry.onClick ? styles.label : styles.labelHL}
                  onClick={entry.onClick}
                >
                  {entry.label}
                </div>

                {/* sub-entries */}
                {entry.entries &&
                  entry.entries.map((sub, j) => (
                    <React.Fragment key={`${i}-${j}`}>
                      <div css={styles.vspaceSub}></div>
                      <div css={styles.labelSub} onClick={sub.onClick}>
                        <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                        <div>{sub.label}</div>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
