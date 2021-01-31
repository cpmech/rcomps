/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Switch } from './Switch';

export interface ISwitchAndTextProps {
  text: string;
  on: boolean;
  onClick: () => void;
  textAtRight?: boolean;
  hgap?: number;
  switchHeight?: number;
  spaceInBetween?: boolean;
  cssText?: string;
}

export const SwitchAndText: React.FC<ISwitchAndTextProps> = ({
  text,
  on,
  onClick,
  textAtRight,
  hgap = 10,
  switchHeight = 24,
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
    margin-right: ${hgap}px;
  `;

  const styleAtRight = css`
    margin-left: ${hgap}px;
  `;

  if (textAtRight) {
    return (
      <div css={styleRoot}>
        <Switch on={on} height={switchHeight} onClick={onClick} />
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
      <Switch on={on} height={switchHeight} onClick={onClick} />
    </div>
  );
};
