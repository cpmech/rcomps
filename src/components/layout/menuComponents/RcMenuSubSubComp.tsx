/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuOptions, RcMenuSubSubEntry } from '../RcMenuTypes';

export interface RcMenuSubSubCompProps {
  subsub: RcMenuSubSubEntry;
  options: RcMenuOptions;
}

export const RcMenuSubSubComp: React.FC<RcMenuSubSubCompProps> = ({ subsub, options }) => {
  const styleRoot = css`
    padding-top: ${options.gapVertSubSubEntries};
    margin-left: ${options.subIconSize
      ? `calc(${options.subIconSize} + ${options.gapHorizLabel})`
      : options.gapHorizLabel};
  `;

  const styleIconLabel = css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const styleLabel = (underline = false) => css`
    color: ${options.colorLabel};
    ${options.labelSubWordBreak ? `word-break: break-all;` : ''}
    ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
    font-size: ${options.fontSizeSubSubEntries};
    cursor: pointer;
    :hover {
      color: ${options.colorLabelHover};
    }
  `;

  const styleIcon = css`
    color: ${options.colorIcon};
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
      <div css={styleIconLabel}>
        <div css={subsub.icon && styleIcon}>{subsub.icon}</div>
        {ele}
      </div>
    </div>
  );
};
