/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { RcIconAngleDown, RcIconAngleUp } from '../../icons';
import { RcMenuOptions, RcMenuSubEntry } from '../RcMenuTypes';
import { RcMenuSubSubComp } from './RcMenuSubSubComp';

export interface RcMenuSubCompProps {
  sub: RcMenuSubEntry;
  options: RcMenuOptions;
  showHideIconSize?: string;
}

export const RcMenuSubComp: React.FC<RcMenuSubCompProps> = ({
  sub,
  options,
  showHideIconSize = '20px',
}) => {
  const [showSubSub, setShowSubSub] = useState<boolean>(
    sub.initShowSubSub === undefined ? true : sub.initShowSubSub,
  );

  const styleRoot = css`
    padding-top: ${options.gapVertSubEntries};
    margin-left: ${options.iconSize
      ? `calc(${options.iconSize} + ${options.gapHorizLabel})`
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
    font-size: ${options.fontSizeSubEntries};
    cursor: pointer;
    :hover {
      color: ${options.colorLabelHover};
    }
  `;

  const styleIcon = css`
    color: ${options.colorIcon};
    margin-right: ${options.gapHorizSubLabel};
  `;

  const styleLabelShowHide = css`
    display: flex;
    flex-direction: row;
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

  if (sub.comp) {
    return <div css={styleRoot}>{sub.comp}</div>;
  }

  const ele = sub.link ? (
    <div>{sub.link}</div>
  ) : sub.onClick ? (
    <div css={styleLabel(sub.underline)} onClick={sub.onClick}>
      {sub.label}
    </div>
  ) : (
    <a css={styleLabel(sub.underline)} href={sub.href}>
      {sub.label}
    </a>
  );

  if (sub.subSubEntries) {
    const shicon = showSubSub ? (
      <RcIconAngleUp size={showHideIconSize} />
    ) : (
      <RcIconAngleDown size={showHideIconSize} />
    );
    return (
      <div css={styleRoot}>
        <div css={styleIconLabel}>
          <div css={sub.icon && styleIcon}>{sub.icon}</div>
          <div css={styleLabelShowHide}>
            {ele}
            <div css={styleShowHideIcon} onClick={() => setShowSubSub(!showSubSub)}>
              {shicon}
            </div>
          </div>
        </div>
        {showSubSub &&
          sub.subSubEntries?.map((subsub, k) => (
            <RcMenuSubSubComp key={k} subsub={subsub} options={options} />
          ))}
      </div>
    );
  }

  return (
    <div css={styleRoot}>
      <div css={styleIconLabel}>
        <div css={sub.icon && styleIcon}>{sub.icon}</div>
        {ele}
      </div>
    </div>
  );
};
