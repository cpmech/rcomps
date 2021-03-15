/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import { RcIconAngleDown, RcIconAngleUp } from '../../icons';
import { RcMenuOptions, RcMenuSubEntry } from '../RcMenuTypes';
import { RcMenuSubSubComp } from './RcMenuSubSubComp';

export interface RcMenuSubCompProps {
  sub: RcMenuSubEntry;
  options: RcMenuOptions;
  initShowSubSub?: boolean;
  showHideIconSize?: string;
}

export const RcMenuSubComp: React.FC<RcMenuSubCompProps> = ({
  sub,
  options,
  initShowSubSub,
  showHideIconSize = '20px',
}) => {
  const [showSubSub, setShowSubSub] = useState<boolean>(initShowSubSub || true);

  const styleRoot = css`
    color: ${options.color};
    margin-left: ${options.gapHorizLabel};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: ${options.gapVertSubEntries};
    ${options.labelSubWordBreak ? `word-break: break-all;` : ''}
  `;

  const styleLabel = (underline = false) => css`
    color: ${options.color};
    ${underline ? 'text-decoration: underline;' : 'text-decoration: none;'}
    font-size: ${options.fontSizeSubEntries};
    cursor: pointer;
    :hover {
      color: ${options.colorHover};
    }
  `;

  const styleIcon = css`
    margin-right: ${options.gapHorizSubLabel};
  `;

  const styleContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `;

  const styleShowHideIcon = css`
    color: ${options.color};
    margin-left: calc(${options.gapHorizSubLabel} / 2);
    cursor: pointer;
    :hover {
      color: ${options.colorHover};
    }
  `;

  if (sub.comp) {
    return <div css={styleRoot}>{sub.comp}</div>;
  }

  const ele = sub.link ? (
    sub.link
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
      <Fragment>
        <div></div>
        <div>
          <div css={styleRoot}>
            <div css={sub.icon && styleIcon}>{sub.icon}</div>
            <div css={styleContainer}>
              {ele}
              <div css={styleShowHideIcon} onClick={() => setShowSubSub(!showSubSub)}>
                {shicon}
              </div>
            </div>
          </div>
          {showSubSub && (
            <div>
              {sub.subSubEntries?.map((subsub, k) => (
                <RcMenuSubSubComp key={k} subsub={subsub} options={options} />
              ))}
            </div>
          )}
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div></div>
      <div css={styleRoot}>
        <div css={sub.icon && styleIcon}>{sub.icon}</div>
        {ele}
      </div>
    </Fragment>
  );
};
