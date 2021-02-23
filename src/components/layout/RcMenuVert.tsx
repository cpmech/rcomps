/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuEntry } from './RcMenuEntry';

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
  gapVertSubSubEntries?: string;
  gapHorizLabel?: string;
  gapHorizSubLabel?: string;

  fontSizeSubEntries?: string;
  fontSizeSubSubEntries?: string;

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
  gapVertSubSubEntries = '10px',
  gapHorizLabel = '10px',
  gapHorizSubLabel = '10px',

  fontSizeSubEntries = '90%',
  fontSizeSubSubEntries = '80%',

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

    vspaceSubSub: css`
      padding-top: ${gapVertSubSubEntries};
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

    labelSubSub: css`
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
      cursor: pointer;
      margin-left: calc(${gapHorizLabel} + ${gapHorizSubLabel});
      font-size: ${fontSizeSubSubEntries};
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    iconSub: css`
      margin-right: ${gapHorizSubLabel};
    `,

    iconSubSub: css`
      margin-right: ${gapHorizSubLabel};
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
                    {sub.subSubEntries &&
                      sub.subSubEntries.map((subsub, k) => (
                        <Fragment key={`${i}-${j}-${k}`}>
                          <div css={styles.vspaceSubSub}></div>
                          <div css={styles.labelSubSub} onClick={subsub.onClick}>
                            <div css={subsub.icon && styles.iconSubSub}>{subsub.icon}</div>
                            <div>{subsub.label}</div>
                          </div>
                        </Fragment>
                      ))}
                  </Fragment>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
