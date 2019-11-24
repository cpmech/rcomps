import React from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconClose } from '@cpmech/react-icons';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleFontSize?: number;
  iconSize?: number;
  marginVert?: number;
  verticalGap?: number;
  paddingHoriz?: number;
  iconPadding?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: SerializedStyles;
  width?: string;
  height?: string;
  allowClickOutsideToClose?: boolean;
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  titleFontSize = 16,
  iconSize = 20,
  marginVert = 10,
  verticalGap = 10,
  paddingHoriz = 20,
  iconPadding = 25,
  color = '#484848',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  titleBgColor,
  titleBorderColor,
  titleStyle,
  width,
  height,
  allowClickOutsideToClose = true,
  children,
}) => {
  return (
    <div
      css={css`
        /* The Modal (background) */
        display: ${isOpen ? 'block' : 'none'};
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
      `}
      onClick={e => {
        if (allowClickOutsideToClose) {
          e.preventDefault();
          if (e.target === e.currentTarget) {
            onClose();
          }
        }
      }}
    >
      <div
        css={css`
          /* modal-content */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${color};
          background-color: ${bgColor};
          border-top: 1px solid ${borderColor};
          ${width ? `width:${width}; overflow:auto;` : ''}
          ${height ? `height:${height}; overflow:auto;` : ''}
        `}
      >
        {title && (
          <div
            css={css`
              /* title */
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-size: ${titleFontSize}px;
              box-sizing: border-box;
              ${titleBgColor ? `background-color:${titleBgColor};` : ''}
              ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
              margin-top: ${marginVert}px;
              padding-left: ${paddingHoriz}px;
              padding-right: ${paddingHoriz}px;
            `}
          >
            {titleStyle ? <span css={titleStyle}>{title}</span> : <span>{title}</span>}
          </div>
        )}

        <div
          css={css`
            /* children */
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
            margin-top: ${verticalGap}px;
          `}
        >
          {children}
        </div>

        <div
          css={css`
            /* icon container */
            position: absolute;
            top: 0;
            right: 0;
            color: ${color};
            cursor: pointer;
          `}
          onClick={onClose}
        >
          <div
            css={css`
              /* close icon */
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${iconSize + iconPadding}px;
              height: ${iconSize + iconPadding}px;
              border-radius: 2px;
              :hover {
                background-color: rgba(0, 0, 0, 0.1);
              }
            `}
          >
            <IconClose size={iconSize} />
          </div>
        </div>
      </div>
    </div>
  );
};
