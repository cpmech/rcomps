/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { useState, useEffect } from 'react';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';

export interface IInfoCardProps {
  initShow?: boolean;
  withShowHide?: boolean;

  width?: string;
  minWidth?: number;
  maxHeight?: number;
  iconSize?: number;
  iconPadding?: number;
  borderRadius?: number;
  bgColor?: string;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: number;
  headerPaddingHoriz?: number;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: SerializedStyles;

  paddingVert?: number;
  paddingHoriz?: number;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
  initShow = true,
  withShowHide = true,

  width = '100%',
  minWidth,
  maxHeight,
  iconSize = 20,
  iconPadding = 25,
  borderRadius = 8,
  bgColor = '#ffffff',

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = 52,
  headerPaddingHoriz = 20,

  title,
  titleStyle = css`
    font-weight: bold;
  `,

  paddingVert = 5,
  paddingHoriz = 10,

  children,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(!!initShow);
  }, [initShow]);

  const contentMaxHeight = maxHeight ? Math.max(100, maxHeight - headerHeight) : undefined;

  return (
    <div
      css={css`
        position: relative;
        width: ${width};
        ${minWidth ? `min-width: ${minWidth}px;` : ''}
        ${maxHeight ? `max-height: ${maxHeight};` : ''}
        background-color: ${bgColor};
        overflow: hidden;
        border-radius: ${borderRadius}px;
        -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
      `}
    >
      {title && (
        <div
          css={css`
            /* header */
            padding-left: ${headerPaddingHoriz}px;
            padding-right: ${headerPaddingHoriz}px;
            width: 100%;
            color: ${headerColor};
            background-color: ${headerBgColor};
            ${withShowHide ? `cursor: pointer;` : ''}
          `}
          onClick={() => {
            if (withShowHide) {
              setShow(!show);
            }
          }}
        >
          <div
            css={css`
              /* title */
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: ${headerHeight}px;
            `}
          >
            {titleStyle ? <span css={titleStyle}>{title}</span> : <span>{title}</span>}
          </div>
        </div>
      )}

      {show && (
        <div
          css={css`
            /* children */
            ${contentMaxHeight ? `max-height: ${contentMaxHeight}px;` : ''}
            ${contentMaxHeight ? `overflow-y: scroll;` : ''}
            padding-top: ${paddingVert}px;
            padding-bottom: ${paddingVert}px;
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
          `}
        >
          {children}
        </div>
      )}

      {withShowHide && (
        <div
          css={css`
            /* icon container */
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
          `}
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
            onClick={() => setShow(!show)}
          >
            {show ? <IconAngleUp size={iconSize} /> : <IconAngleDown size={iconSize} />}
          </div>
        </div>
      )}
    </div>
  );
};
