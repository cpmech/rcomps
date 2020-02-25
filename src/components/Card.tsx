import React from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconVertDots } from '@cpmech/react-icons';

export interface ICardProps {
  width?: string;
  height?: string;
  openMenu?: () => void;
  iconSize?: number;
  iconPadding?: number;
  borderRadius?: number;
  bgColor?: string;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: number;
  verticalGap?: number;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: SerializedStyles;

  paddingHoriz?: number;
  paddingVert?: number;

  noZoom?: boolean;
}

export const Card: React.FC<ICardProps> = ({
  width = '280px',
  height = '435px',
  openMenu,
  iconSize = 20,
  iconPadding = 25,
  borderRadius = 8,
  bgColor = '#ffffff',

  headerColor = '#484848',
  headerBgColor = '#f2f2f2',
  headerHeight = 52,

  title,
  titleStyle = css`
    font-weight: bold;
    font-size: 1.25em;
  `,

  paddingHoriz = 20,
  paddingVert = 10,

  noZoom,

  children,
}) => {
  const zoomCss = noZoom
    ? ''
    : ` /* grow */
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;

        :hover {
          /* highlight */
          -webkit-box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4);
          box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4);
          /* grow */
          -webkit-box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.9);
          box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.9);
          -webkit-transform: scale(1.05, 1.05);
          -moz-transform: scale(1.05, 1.05);
          -o-transform: scale(1.05, 1.05);
          -ms-transform: scale(1.05, 1.05);
          transform: scale(1.05, 1.05);
        }
    `;

  return (
    <div
      css={css`
        position: relative;
        width: ${width};
        height: ${height};
        background-color: ${bgColor};
        overflow: hidden;
        border-radius: ${borderRadius}px;
        -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
        ${zoomCss}
      `}
    >
      {title && (
        <div
          css={css`
            /* header */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            color: ${headerColor};
            background-color: ${headerBgColor};
          `}
        >
          <div
            css={css`
              /* title */
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: ${headerHeight}px;
              padding-left: ${paddingHoriz}px;
            `}
          >
            {titleStyle ? <span css={titleStyle}>{title}</span> : <span>{title}</span>}
          </div>
        </div>
      )}

      <div
        css={css`
          position: absolute;
          top: ${headerHeight}px;
          padding: ${paddingVert}px ${paddingHoriz}px;
        `}
      >
        {children}
      </div>

      {openMenu && (
        <div
          css={css`
            /* icon container */
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
          `}
          onClick={openMenu}
        >
          <div
            css={css`
              /* menu icon */
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${iconSize + iconPadding}px;
              height: ${headerHeight}px;
              color: ${headerColor};
            `}
          >
            <IconVertDots size={iconSize} />
          </div>
        </div>
      )}
    </div>
  );
};
