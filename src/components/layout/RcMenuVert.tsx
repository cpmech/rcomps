/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuEntry } from './RcMenuHoriz';

export interface RcMenuVertProps {
  entries: RcMenuEntry[];

  bgColor?: string;
  color?: string;
  colorHover?: string;

  minWidth?: string;
  maxWidth?: string;

  paddingVert?: string;
  paddingHoriz?: string;
  gapVertEntries?: string;
  gapVertSubEntries?: string;
  gapHorizLabel?: string;

  fontSizeSubEntries?: string;

  labelWordBreak?: boolean;
  labelSubWordBreak?: boolean;
}

export const RcMenuVert: React.FC<RcMenuVertProps> = ({
  entries,

  bgColor,
  color = '#484848',
  colorHover = '#757575',

  minWidth,
  maxWidth,

  paddingVert = '40px',
  paddingHoriz = '20px',
  gapVertEntries = '20px',
  gapVertSubEntries = '30px',
  gapHorizLabel = '10px',

  fontSizeSubEntries = '90%',

  labelWordBreak = false,
  labelSubWordBreak = true,
  //
}) => {
  //
  const styles = {
    root: css`
      min-width: ${minWidth};
      max-width: ${maxWidth};
      padding: ${paddingVert} ${paddingHoriz};
      ${bgColor ? `background-color: ${bgColor};` : ''}
    `,

    vspaceMain: css`
      padding-top: ${gapVertEntries};
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
      ${labelWordBreak ? `word-break: break-all;` : ''}
      margin-left: ${gapHorizLabel};
    `,

    labelHL: css`
      ${labelWordBreak ? `word-break: break-all;` : ''}
      cursor: pointer;
      margin-left: ${gapHorizLabel};
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: css`
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
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
  };

  return (
    <div css={styles.root}>
      {entries.map((entry, i) => (
        <div key={i} css={styles.vspaceMain}>
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
      ))}
    </div>
  );
};
