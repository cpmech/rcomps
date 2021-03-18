/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { RcIconAngleDown, RcIconAngleUp } from '../../icons';
import { RcMenuEntry, RcMenuOptions } from '../RcMenuTypes';
import { RcMenuSubComp } from './RcMenuSubComp';

export interface RcMenuCompProps {
  entry: RcMenuEntry;
  options: RcMenuOptions;
}

export const RcMenuComp: React.FC<RcMenuCompProps> = ({ entry, options }) => {
  const [showSub, setShowSub] = useState<boolean>(
    entry.initShowSub !== undefined
      ? entry.initShowSub
      : options.initShowAllSub !== undefined
      ? options.initShowAllSub
      : true,
  );

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

  const styleLabelShowHide = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `;

  const styleShowHideIcon = css`
    color: ${options.colorLabel};
    margin-left: calc(${options.gapHorizSubLabel} / 2);
    cursor: pointer;
    :hover {
      color: ${options.colorLabelHover};
    }
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

  const useShowHideSub =
    entry.useShowSub !== undefined
      ? entry.useShowSub
      : options.useShowHideSub !== undefined
      ? options.useShowHideSub
      : true;

  if (entry.entries && entry.entries.length > 0 && useShowHideSub) {
    const shicon = showSub ? (
      <RcIconAngleUp size={options.showHideIconSize} />
    ) : (
      <RcIconAngleDown size={options.showHideIconSize} />
    );
    return (
      <div>
        <div css={styleIconLabel}>
          <div css={styleIcon}>{entry.icon}</div>
          <div css={styleLabelShowHide}>
            {ele}
            <div css={styleShowHideIcon} onClick={() => setShowSub(!showSub)}>
              {shicon}
            </div>
          </div>
        </div>
        {showSub &&
          entry.entries?.map((sub, j) => <RcMenuSubComp key={j} sub={sub} options={options} />)}
      </div>
    );
  }

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
