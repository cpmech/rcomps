/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';

export interface RcCardProps {
  initShow?: boolean;
  withShowHide?: boolean;

  width?: string;
  minWidth?: string;
  maxHeight?: string;
  iconSize?: string;
  iconPadding?: string;
  borderRadius?: string;
  bgColor?: string;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: string;
  headerPaddingHoriz?: string;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;

  paddingVert?: string;
  paddingHoriz?: string;

  cssTitle?: string;
}

export const RcCard: React.FC<RcCardProps> = ({
  initShow = true,
  withShowHide = true,

  width = '100%',
  minWidth,
  maxHeight,
  iconSize = '20px',
  iconPadding = '25px',
  borderRadius = '8px',
  bgColor = '#ffffff',

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = '52px',
  headerPaddingHoriz = '20px',

  title,

  paddingVert = '5px',
  paddingHoriz = '10px',

  cssTitle = `font-weight: bold;`,

  children,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(!!initShow);
  }, [initShow]);

  const contentMaxHeight = maxHeight ? `calc(${maxHeight} - ${headerHeight})` : '';

  return (
    <div
      css={css`
        position: relative;
        width: ${width};
        ${minWidth ? `min-width: ${minWidth};` : ''}
        ${maxHeight ? `max-height: ${maxHeight};` : ''}
        background-color: ${bgColor};
        overflow: hidden;
        border-radius: ${borderRadius};
        -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
      `}
    >
      {title && (
        <div
          css={css`
            /* header */
            padding-left: ${headerPaddingHoriz};
            padding-right: ${headerPaddingHoriz};
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
              height: ${headerHeight};
            `}
          >
            {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
          </div>
        </div>
      )}

      {show && (
        <div
          css={css`
            /* children */
            ${contentMaxHeight ? `max-height: ${contentMaxHeight};` : ''}
            ${contentMaxHeight ? `overflow-y: scroll;` : ''}
            padding-top: ${paddingVert};
            padding-bottom: ${paddingVert};
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
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
              width: calc(${iconSize} + ${iconPadding});
              height: ${headerHeight};
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
