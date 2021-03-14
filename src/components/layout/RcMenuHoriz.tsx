/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuEntry, RcMenuSubEntry, RcMenuSubSubEntry } from './RcMenuTypes';

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
  gapVertSubEntries = '15px',
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

    sub: css`
      color: ${color};
      margin-left: ${gapHorizLabel};
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubEntries};
    `,

    subsub: css`
      color: ${color};
      margin-left: calc(${gapHorizLabel} + ${indentSub});
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: ${gapVertSubSubEntries};
    `,

    label: css`
      margin-left: ${gapHorizLabel};
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

    gapBetweenEntries: css`
      margin-left: ${gapHorizEntries};
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
      <div css={styles.container}>
        {entries.map((entry, i) => (
          <Fragment key={i}>
            {/* gap between entries */}
            {gapHorizEntries && i > 0 && <div css={styles.gapBetweenEntries}></div>}

            {/* the entry */}
            <div>{renderEntry(`${i}`, entry)}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
