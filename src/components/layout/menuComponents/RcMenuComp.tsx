/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuEntry, RcMenuOptions } from '../RcMenuTypes';
import { RcMenuSubComp } from './RcMenuSubComp';

export interface RcMenuCompProps {
  entry: RcMenuEntry;
  options: RcMenuOptions;
}

export const RcMenuComp: React.FC<RcMenuCompProps> = ({ entry, options }) => {
  const styleIconLabel = css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const styleStaticLabel = css`
    color: ${options.colorLabel};
    ${options.labelWordBreak ? `word-break: break-all;` : ''}
  `;

  const styleLabel = (underline = false) => css`
    color: ${options.colorLabel};
    ${options.labelWordBreak ? `word-break: break-all;` : ''}
    ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
    cursor: pointer;
    :hover {
      color: ${options.colorLabelHover};
    }
  `;

  const styleIcon = css`
    color: ${options.colorIcon};
    margin-right: ${options.gapHorizLabel};
  `;

  if (entry.comp) {
    return <div>{entry.comp}</div>;
  }

  const isStaticLabel = entry.entries && !entry.onClick && !entry.link;

  const ele = entry.link ? (
    <div>{entry.link}</div>
  ) : entry.onClick ? (
    <div
      css={isStaticLabel ? styleStaticLabel : styleLabel(entry.underline)}
      onClick={entry.onClick}
    >
      {entry.label}
    </div>
  ) : (
    <a css={styleLabel(entry.underline)} href={entry.href}>
      {entry.label}
    </a>
  );

  return (
    <div>
      <div css={styleIconLabel}>
        <div css={styleIcon}>{entry.icon}</div>
        {ele}
      </div>
      {entry.entries?.map((sub, j) => (
        <RcMenuSubComp key={j} sub={sub} options={options} />
      ))}
    </div>
  );
};
