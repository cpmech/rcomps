/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcSwitch } from '../foundation';

export interface RcSwitchAndTextProps {
  text: string;
  on: boolean;
  onClick: () => void;
  textAtRight?: boolean;
  hgap?: string;
  switchHeight?: string;
  spaceInBetween?: boolean;
  cssText?: string;
}

export const RcSwitchAndText: React.FC<RcSwitchAndTextProps> = ({
  text,
  on,
  onClick,
  textAtRight,
  hgap = '10px',
  switchHeight = '24px',
  spaceInBetween = false,
  cssText,
}) => {
  const styleRoot = css`
    display: flex;
    flex-direction: row;
    ${spaceInBetween ? `justify-content: space-between;` : ''}
    align-items: center;
  `;

  const styleAtLeft = css`
    margin-right: ${hgap};
  `;

  const styleAtRight = css`
    margin-left: ${hgap};
  `;

  if (textAtRight) {
    return (
      <div css={styleRoot}>
        <RcSwitch on={on} height={switchHeight} onClick={onClick} />
        <div css={styleAtRight}>
          {cssText ? <div css={css(cssText)}>{text}</div> : <div>{text}</div>}
        </div>
      </div>
    );
  }

  return (
    <div css={styleRoot}>
      <div css={styleAtLeft}>
        {cssText ? <div css={css(cssText)}>{text}</div> : <div>{text}</div>}
      </div>
      <RcSwitch on={on} height={switchHeight} onClick={onClick} />
    </div>
  );
};
