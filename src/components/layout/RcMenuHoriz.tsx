/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuEntry } from './RcMenuEntry';

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
  gapVertSubSubEntries?: string;
  gapHorizLabel?: string;
  gapHorizSubLabel?: string;
  gapHorizSubSubLabel?: string;
  gapHorizEntries?: string;
  indentSub?: string;

  fontSizeSubEntries?: string;
  fontSizeSubSubEntries?: string;
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
  gapVertSubSubEntries = '10px',
  gapHorizLabel = '10px',
  gapHorizSubLabel = '10px',
  gapHorizSubSubLabel = '10px',
  gapHorizEntries,
  indentSub = '30px',

  fontSizeSubEntries = '90%',
  fontSizeSubSubEntries = '80%',
}) => {
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

    labelSubSub: css`
      cursor: pointer;
      margin-left: calc(${gapHorizLabel} + ${indentSub});
      font-size: ${fontSizeSubSubEntries};
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubSubEntries};
    `,

    iconSub: css`
      margin-right: ${gapHorizSubLabel};
    `,

    iconSubSub: css`
      margin-right: ${gapHorizSubSubLabel};
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
                        <div></div>
                        <div css={styles.labelSub} onClick={sub.onClick}>
                          <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                          <div>{sub.label}</div>
                        </div>
                        {sub.subSubEntries &&
                          sub.subSubEntries.map((subsub, k) => (
                            <Fragment key={`${i}-${j}-${k}`}>
                              <div></div>
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};
