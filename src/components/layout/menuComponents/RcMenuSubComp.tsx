/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuOptions, RcMenuSubEntry } from '../RcMenuTypes';
import { RcMenuSubSubComp } from './RcMenuSubSubComp';

export interface RcMenuSubCompProps {
  id: string;
  sub: RcMenuSubEntry;
  options: RcMenuOptions;
}

export const RcMenuSubComp: React.FC<RcMenuSubCompProps> = ({ id, sub, options }) => {
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
    <Fragment key={id}>
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
          <Fragment>
            <div>
              {sub.subSubEntries?.map((subsub, k) => (
                <RcMenuSubSubComp id={`${id}-${k}`} subsub={subsub} options={options} />
              ))}
            </div>
            <div
              css={css`
                position: absolute;
                top: 0;
                right: 0;
              `}
            >
              X
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
