/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuEntry, RcMenuOptions } from '../RcMenuTypes';
import { RcMenuSubComp } from './RcMenuSubComp';

export interface RcMenuCompProps {
  entry: RcMenuEntry;
  options: RcMenuOptions;
}

export const RcMenuComp: React.FC<RcMenuCompProps> = ({ entry, options }) => {
  const styleRoot = css`
    color: ${options.color};
    display: grid;
    grid-template-columns: auto auto;
    justify-content: flex-start;
    align-items: center;
    ${options.labelWordBreak ? `word-break: break-all;` : ''}
  `;

  const styleLabel = css`
    color: ${options.color};
    ${options.labelWordBreak ? `word-break: break-all;` : ''}
  `;

  const styleLabelHL = (underline = false) => css`
    color: ${options.color};
    ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
    cursor: pointer;
    :hover {
      color: ${options.colorHover};
    }
  `;

  const styleIcon = css`
    margin-right: ${options.gapHorizLabel};
  `;

  if (entry.comp) {
    return <div css={styleRoot}>{entry.comp}</div>;
  }

  const ele = entry.link ? (
    entry.link
  ) : entry.onClick ? (
    <div
      css={entry.entries && !entry.onClick ? styleLabel : styleLabelHL(entry.underline)}
      onClick={entry.onClick}
    >
      {entry.label}
    </div>
  ) : (
    <a css={styleLabelHL(entry.underline)} href={entry.href}>
      {entry.label}
    </a>
  );

  return (
    <div css={styleRoot}>
      <div css={styleIcon}>{entry.icon}</div>
      {ele}
      {entry.entries?.map((sub, j) => (
        <RcMenuSubComp key={j} sub={sub} options={options} />
      ))}
    </div>
  );
};
