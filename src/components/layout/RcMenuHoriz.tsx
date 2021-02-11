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

  minHeight?: string;
  maxWidth?: string;
  width?: string;
  height?: string;

  marginTop?: string;
  paddingVert?: string;
  paddingHoriz?: string;
  gapVert?: string;
  gapVertSubEntries?: string;
  gapHorizLabel?: string;
  gapHorizEntries?: string;

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

  marginTop = '10px',
  paddingVert = '5px',
  paddingHoriz = '20px',
  gapVert = '5px',
  gapVertSubEntries = '30px',
  gapHorizLabel = '10px',
  gapHorizEntries,

  fontSizeSubEntries = '90%',
  //
}) => {
  //
  const styles = {
    root: css`
      ${minHeight ? `min-height: ${minHeight};` : ''}
      ${maxWidth ? `max-width: ${maxWidth}; margin: 0 auto;` : ''}
      height: ${height};
      padding: ${paddingVert} ${paddingHoriz};
      margin-top: ${marginTop};
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
      margin-top: -${gapVert};
      > * {
        margin-top: ${gapVert};
      }
    `,

    vspaceSub: css`
      padding-top: ${gapVertSubEntries};
    `,

    entry: css`
      color: ${color};
      display: grid;
      grid-template-columns: auto auto;
      justify-content: flex-start;
      align-items: center;
    `,

    label: css`
      margin-left: ${gapHorizLabel};
    `,

    labelHL: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel};
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel};
      font-size: ${fontSizeSubEntries};
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    iconSub: css`
      margin-right: ${gapHorizLabel};
    `,

    gapBetweenEntries: css`
      margin-left: ${gapHorizEntries};
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
