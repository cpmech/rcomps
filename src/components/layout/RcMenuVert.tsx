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

  paddingTop?: string;
  paddingBottom?: string;
  paddingHoriz?: string;
  gapVertEntries?: string;
  gapVertEntriesWithoutSub?: string;
  gapVertSeparator?: string;
  gapVertSubEntries?: string;
  gapVertSubSubEntries?: string;
  gapHorizLabel?: string;
  gapHorizSubLabel?: string;
  gapHorizSubSubLabel?: string;
  indentSub?: string;

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

  paddingTop = '40px',
  paddingBottom = '80px',
  paddingHoriz = '20px',
  gapVertEntries = '60px',
  gapVertEntriesWithoutSub = '20px',
  gapVertSeparator = '30px',
  gapVertSubEntries = '15px',
  gapVertSubSubEntries = '10px',
  gapHorizLabel = '10px',
  gapHorizSubLabel = '10px',
  gapHorizSubSubLabel = '10px',
  indentSub = '30px',

  fontSizeSubEntries = '90%',
  fontSizeSubSubEntries = '80%',

  labelWordBreak = false,
  labelSubWordBreak = true,
}) => {
  const prevWasSeparator = (i: number) => i > 0 && i < entries.length && !!entries[i - 1].separator;

  const hasSubEntries = (i: number) => i >= 0 && i < entries.length && !!entries[i].entries;

  const styles = {
    root: css`
      min-width: ${minWidth};
      max-width: ${maxWidth};
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingHoriz};
      padding-right: ${paddingHoriz};
      ${bgColor ? `background-color: ${bgColor};` : ''}
    `,

    vspaceMain: (i: number) =>
      i === 0
        ? ''
        : css`
            padding-top: ${prevWasSeparator(i)
              ? gapVertSeparator
              : hasSubEntries(i)
              ? gapVertEntries
              : gapVertEntriesWithoutSub};
          `,

    vspaceSeparator: (i: number) =>
      i === 0
        ? ''
        : css`
            padding-top: ${gapVertSeparator};
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

    labelHL: (underline = false) => css`
      color: ${color};
      ${labelWordBreak ? `word-break: break-all;` : ''}
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      margin-left: ${gapHorizLabel};
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: (underline = false) => css`
      color: ${color};
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      margin-left: ${gapHorizLabel};
      font-size: ${fontSizeSubEntries};
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubEntries};
    `,

    labelSubSub: (underline = false) => css`
      color: ${color};
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      margin-left: calc(${gapHorizLabel} + ${indentSub});
      font-size: ${fontSizeSubSubEntries};
      cursor: pointer;
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
  };

  return (
    <div css={styles.root}>
      {entries.map((entry, i) => (
        <div key={i} css={entry.separator ? styles.vspaceSeparator(i) : styles.vspaceMain(i)}>
          {/* given component */}
          {entry.comp}

          {/* icon and label */}
          {(entry.icon || entry.label) && (
            <div css={styles.entry}>
              <div>{entry.icon}</div>
              {entry.href ? (
                <a css={styles.labelHL(entry.underline)} href={entry.href}>
                  {entry.label}
                </a>
              ) : (
                <div
                  css={
                    entry.entries && !entry.onClick ? styles.label : styles.labelHL(entry.underline)
                  }
                  onClick={entry.onClick}
                >
                  {entry.label}
                </div>
              )}

              {/* sub-entries */}
              {entry.entries &&
                entry.entries.map((sub, j) => (
                  <Fragment key={`${i}-${j}`}>
                    <div></div>
                    {sub.href ? (
                      <a css={styles.labelSub(sub.underline)} href={sub.href}>
                        <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                        <div>{sub.label}</div>
                      </a>
                    ) : (
                      <div css={styles.labelSub(sub.underline)} onClick={sub.onClick}>
                        <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                        <div>{sub.label}</div>
                      </div>
                    )}
                    {sub.subSubEntries &&
                      sub.subSubEntries.map((subsub, k) => (
                        <Fragment key={`${i}-${j}-${k}`}>
                          <div></div>
                          {subsub.href ? (
                            <a css={styles.labelSubSub(subsub.underline)} href={subsub.href}>
                              <div css={subsub.icon && styles.iconSubSub}>{subsub.icon}</div>
                              <div>{subsub.label}</div>
                            </a>
                          ) : (
                            <div
                              css={styles.labelSubSub(subsub.underline)}
                              onClick={subsub.onClick}
                            >
                              <div css={subsub.icon && styles.iconSubSub}>{subsub.icon}</div>
                              <div>{subsub.label}</div>
                            </div>
                          )}
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
