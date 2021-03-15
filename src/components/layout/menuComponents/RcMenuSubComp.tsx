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

  return (
    <Fragment>
      <div></div>
      <div
        css={css`
          position: relative;
        `}
      >
        <div css={styleRoot}>
          <div css={sub.icon && styleIcon}>{sub.icon}</div>
          {ele}
        </div>
        {sub.subSubEntries && (
          <div
            css={css`
              color: ${options.color};
              :hover {
                color: ${options.colorHover};
              }
              cursor: pointer;
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
            onClick={() => setShowSubSub(!showSubSub)}
          >
            {showSubSub ? (
              <RcIconAngleUp size={showHideIconSize} />
            ) : (
              <RcIconAngleDown size={showHideIconSize} />
            )}
          </div>
        )}
        {sub.subSubEntries && showSubSub && (
          <div>
            {sub.subSubEntries?.map((subsub, k) => (
              <RcMenuSubSubComp key={k} subsub={subsub} options={options} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};
