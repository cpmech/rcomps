/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, ReactNode } from 'react';

export interface RcMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  entries?: {
    icon?: ReactNode;
    label?: string;
    onClick?: () => void;
  }[];
}

export interface RcMenuHorizProps {
  entries: RcMenuEntry[];

  bgColor?: string;
  color?: string;
  colorHover?: string;

  minHeight?: number;
  maxWidth?: number;
  width?: string;
  height?: string;

  marginTop?: number;
  paddingVert?: number;
  paddingHoriz?: number;
  gapVert?: number;
  gapVertSubEntries?: number;
  gapHorizLabel?: number;
  gapHorizEntries?: number;

  fontSizeSubEntries?: string;
}

export const RcMenuHoriz: React.FC<RcMenuHorizProps> = ({
  entries,

  bgColor,
  color = '#484848',
  colorHover = '#757575',

  minHeight,
  maxWidth,
  width = '100%',
  height = '100%',

  marginTop = 10,
  paddingVert = 5,
  paddingHoriz = 20,
  gapVert = 5,
  gapVertSubEntries = 30,
  gapHorizLabel = 10,
  gapHorizEntries,

  fontSizeSubEntries = '90%',
  //
}) => {
  //
  const styles = {
    root: css`
      ${minHeight ? `min-height: ${minHeight}px;` : ''}
      ${maxWidth ? `max-width: ${maxWidth}px; margin: 0 auto;` : ''}
      height: ${height};
      padding: ${paddingVert}px ${paddingHoriz}px;
      margin-top: ${marginTop}px;
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
      margin-top: -${gapVert}px;
      > * {
        margin-top: ${gapVert}px;
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

    gapBetweenEntries: css`
      margin-left: ${gapHorizEntries}px;
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {entries.map((entry, i) => (
          <Fragment key={i}>
            {/* gap between entries */}
            {gapHorizEntries && i > 0 && <div css={styles.gapBetweenEntries}></div>}

            {/* the entry */}
            <div>
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
                      <Fragment key={`${i}-${j}`}>
                        <div css={styles.vspaceSub}></div>
                        <div css={styles.labelSub} onClick={sub.onClick}>
                          <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                          <div>{sub.label}</div>
                        </div>
                      </Fragment>
                    ))}
                </div>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
