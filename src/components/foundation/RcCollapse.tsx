/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { RcIconAngleDown, RcIconAngleUp } from '../icons';

export interface RcCollapseProps {
  title: string;
  fontSize?: string;
  iconSize?: string;
  width?: string;
  height?: string;
  paddingHoriz?: string;
  iconPaddingRight?: string;
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
  fontSize = '18px',
  iconSize = '18px',
  width,
  height = '50px',
  paddingHoriz = '20px',
  iconPaddingRight = '15px',
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
            font-size: ${fontSize};
            box-sizing: border-box;
            height: ${height};
            ${titleBgColor ? `background-color:${titleBgColor};` : ''}
            ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
          `}
          onClick={() => setShow(!show)}
        >
          {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
        </div>
        <div
          css={css`
            display: ${show ? 'inline-block' : 'none'};
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
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
            line-height: ${fontSize};
            top: calc(${height} / 2 - ${fontSize} / 2);
            right: ${iconPaddingRight};
            color: ${color};
          `}
          onClick={() => setShow(!show)}
        >
          {show ? <RcIconAngleUp size={iconSize} /> : <RcIconAngleDown size={iconSize} />}
        </div>
      </div>
    </div>
  );
};
