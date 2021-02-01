/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';

export interface RcCollapseProps {
  title: string;
  fontSize?: number;
  iconSize?: number;
  width?: string;
  height?: number;
  paddingHoriz?: number;
  iconPaddingRight?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  closeOnClickBody?: boolean;
  initShow?: boolean;
  cssTitle?: string;
}

export const RcCollapse: React.FC<RcCollapseProps> = ({
  title,
  fontSize = 18,
  iconSize = 18,
  width,
  height = 50,
  paddingHoriz = 20,
  iconPaddingRight = 15,
  color = '#484848',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  titleBgColor,
  titleBorderColor,
  closeOnClickBody = true,
  initShow = false,
  cssTitle,
  children,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!!initShow);
  }, [initShow]);

  return (
    <div
      css={css`
        ${width ? `width:${width};` : ''}
        cursor: pointer;
      `}
    >
      <div
        css={css`
          position: relative;
          color: ${color};
          background-color: ${bgColor};
        `}
        onClick={() => closeOnClickBody && setShow(!show)}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: ${fontSize}px;
            box-sizing: border-box;
            height: ${height}px;
            ${titleBgColor ? `background-color:${titleBgColor};` : ''}
            ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
          `}
          onClick={() => setShow(!show)}
        >
          {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
        </div>
        <div
          css={css`
            display: ${show ? 'inline-block' : 'none'};
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
          `}
        >
          {children}
        </div>
        {borderColor && !titleBorderColor && (
          <div
            css={css`
              border-bottom: 1px solid ${borderColor};
            `}
          ></div>
        )}
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize}px;
            top: ${height / 2 - fontSize / 2}px;
            right: ${iconPaddingRight}px;
            color: ${color};
          `}
          onClick={() => setShow(!show)}
        >
          {show ? <IconAngleUp size={iconSize} /> : <IconAngleDown size={iconSize} />}
        </div>
      </div>
    </div>
  );
};
