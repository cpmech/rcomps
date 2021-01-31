/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { Switch } from './Switch';

interface IProps {
  text: string;
  on: boolean;
  onClick: () => void;
  textAtRight?: boolean;
  textStyle?: SerializedStyles;
  hgap?: number;
  switchHeight?: number;
  spaceInBetween?: boolean;
}

export const SwitchAndText: React.FC<IProps> = ({
  text,
  on,
  onClick,
  textAtRight,
  textStyle,
  hgap = 10,
  switchHeight = 24,
  spaceInBetween = false,
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
          <div css={textStyle}>{text}</div>
        </div>
      </div>
    );
  }

  return (
    <div css={styleRoot}>
      <div css={styleAtLeft}>
        <div css={textStyle}>{text}</div>
      </div>
      <Switch on={on} height={switchHeight} onClick={onClick} />
    </div>
  );
};
