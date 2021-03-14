/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuEntry, RcMenuSubEntry, RcMenuSubSubEntry } from './RcMenuEntry';

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
      ${labelWordBreak ? `word-break: break-all;` : ''}
    `,

    sub: css`
      color: ${color};
      margin-left: ${gapHorizLabel};
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubEntries};
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
    `,

    subsub: css`
      color: ${color};
      margin-left: calc(${gapHorizLabel} + ${indentSub});
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubSubEntries};
      ${labelSubWordBreak ? `word-break: break-all;` : ''}
    `,

    label: css`
      color: ${color};
      ${labelWordBreak ? `word-break: break-all;` : ''}
    `,

    labelHL: (underline = false) => css`
      color: ${color};
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: (underline = false) => css`
      color: ${color};
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      font-size: ${fontSizeSubEntries};
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    labelSubSub: (underline = false) => css`
      color: ${color};
      ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
      font-size: ${fontSizeSubSubEntries};
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
    `,

    icon: css`
      margin-right: ${gapHorizLabel};
    `,

    iconSub: css`
      margin-right: ${gapHorizSubLabel};
    `,

    iconSubSub: css`
      margin-right: ${gapHorizSubSubLabel};
    `,
  };

  const renderSubSubEntry = (key: string, subsub: RcMenuSubSubEntry) => {
    if (subsub.comp) {
      return subsub.comp;
    }
    const ele = subsub.link ? (
      subsub.link
    ) : subsub.onClick ? (
      <div css={styles.labelSubSub(subsub.underline)} onClick={subsub.onClick}>
        {subsub.label}
      </div>
    ) : (
      <a css={styles.labelSubSub(subsub.underline)} href={subsub.href}>
        {subsub.label}
      </a>
    );
    return (
      <div key={key} css={styles.subsub}>
        <div css={subsub.icon && styles.iconSubSub}>{subsub.icon}</div>
        {ele}
      </div>
    );
  };

  const renderSubEntry = (key: string, sub: RcMenuSubEntry) => {
    if (sub.comp) {
      return sub.comp;
    }
    const ele = sub.link ? (
      sub.link
    ) : sub.onClick ? (
      <div css={styles.labelSub(sub.underline)} onClick={sub.onClick}>
        {sub.label}
      </div>
    ) : (
      <a css={styles.labelSub(sub.underline)} href={sub.href}>
        {sub.label}
      </a>
    );
    return (
      <Fragment key={key}>
        <div></div>
        <div>
          <div css={styles.sub}>
            <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
            {ele}
          </div>
          {sub.subSubEntries?.map((subsub, k) => renderSubSubEntry(`${key}-${k}`, subsub))}
        </div>
      </Fragment>
    );
  };

  const renderEntry = (key: string, entry: RcMenuEntry) => {
    if (entry.comp) {
      return entry.comp;
    }
    const ele = entry.link ? (
      entry.link
    ) : entry.onClick ? (
      <div
        css={entry.entries && !entry.onClick ? styles.label : styles.labelHL(entry.underline)}
        onClick={entry.onClick}
      >
        {entry.label}
      </div>
    ) : (
      <a css={styles.labelHL(entry.underline)} href={entry.href}>
        {entry.label}
      </a>
    );
    return (
      <div css={styles.entry}>
        <div css={styles.icon}>{entry.icon}</div>
        {ele}
        {entry.entries?.map((sub, j) => renderSubEntry(`${key}-${j}`, sub))}
      </div>
    );
  };

  return (
    <div css={styles.root}>
      {entries.map((entry, i) => (
        <div key={i} css={entry.separator ? styles.vspaceSeparator(i) : styles.vspaceMain(i)}>
          {renderEntry(`${i}`, entry)}
        </div>
      ))}
    </div>
  );
};
