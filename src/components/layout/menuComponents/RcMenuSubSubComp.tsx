/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuOptions, RcMenuSubSubEntry } from '../RcMenuTypes';

export interface RcMenuSubSubCompProps {
  subsub: RcMenuSubSubEntry;
  options: RcMenuOptions;
}

export const RcMenuSubSubComp: React.FC<RcMenuSubSubCompProps> = ({ subsub, options }) => {
  const styleRoot = css`
    color: ${options.color};
    margin-left: calc(${options.gapHorizLabel} + ${options.indentSub});
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: ${options.gapVertSubSubEntries};
    ${options.labelSubWordBreak ? `word-break: break-all;` : ''}
  `;

  const styleLabel = (underline = false) => css`
    color: ${options.color};
    ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
    font-size: ${options.fontSizeSubSubEntries};
    cursor: pointer;
    :hover {
      color: ${options.colorHover};
    }
  `;

  const styleIcon = css`
    margin-right: ${options.gapHorizSubSubLabel};
  `;

  if (subsub.comp) {
    return <div css={styleRoot}>{subsub.comp}</div>;
  }

  const ele = subsub.link ? (
    subsub.link
  ) : subsub.onClick ? (
    <div css={styleLabel(subsub.underline)} onClick={subsub.onClick}>
      {subsub.label}
    </div>
  ) : (
    <a css={styleLabel(subsub.underline)} href={subsub.href}>
      {subsub.label}
    </a>
  );

  return (
    <div css={styleRoot}>
      <div css={subsub.icon && styleIcon}>{subsub.icon}</div>
      {ele}
    </div>
  );
};
