/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import { IconVertDots } from '@cpmech/react-icons';
import { getFloatCss, getMenuEntryCss, OutsideClick } from '../helpers';

export interface RcGameCardMenuEntry {
  message: string;
  onClick: () => void;
}

export interface RcGameCardProps {
  width?: number;
  height?: number;
  iconSize?: number;
  iconPadding?: number;
  borderRadius?: number;
  bgColor?: string;

  menuEntries?: RcGameCardMenuEntry[];
  menuWidthBox?: string; // width of entries box
  menuHeightBox?: number; // height of entries box
  menuEntryHeight?: number;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: number;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;

  paddingHoriz?: number;
  paddingVert?: number;

  heroHeight?: number;
  heroBg?: string;
  hero?: any;

  buttonsHeight?: number;
  buttonsBg?: string;
  buttons?: any;

  noZoom?: boolean;

  cssTitle?: string;
  cssMenuText?: string;
}

export const RcGameCard: React.FC<RcGameCardProps> = ({
  width = 280,
  height = 435,
  iconSize = 20,
  iconPadding = 25,
  borderRadius = 8,
  bgColor = '#ffffff',

  menuEntries,
  menuWidthBox,
  menuHeightBox,
  menuEntryHeight = 50,

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = 52,

  title,

  paddingHoriz = 20,
  paddingVert = 10,

  heroHeight = 100,
  heroBg = `background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);`,
  hero,

  buttonsHeight = 60,
  buttonsBg = '#ffffff',
  buttons,

  noZoom = true,

  cssMenuText,
  cssTitle = `font-weight: bold;`,

  children,
}) => {
  const [showMenu, setShowMenu] = useState(false);

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

  const contentWidth = width - 2 * paddingHoriz;
  let contentHeight = height - headerHeight - 2 * paddingVert;
  let contentTop = headerHeight + paddingVert;
  if (hero) {
    contentHeight -= heroHeight;
    contentTop += heroHeight;
  }
  if (buttons) {
    contentHeight -= buttonsHeight;
  }

  const floatCss = menuEntries
    ? getFloatCss(showMenu, menuHeightBox, menuWidthBox, true)
    : undefined;

  const menuEntryCss = menuEntries ? getMenuEntryCss(paddingHoriz, menuEntryHeight) : undefined;

  return (
    <div
      css={css`
        * {
          margin: 0;
          padding: 0;
        }
        position: relative;
        width: ${width}px;
        height: ${height}px;
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
            left: ${paddingHoriz}px;
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
            `}
          >
            {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
          </div>
        </div>
      )}

      {hero && (
        <div
          css={css`
            /* hero container */
            position: absolute;
            top: ${headerHeight}px;
            left: 0;
            width: 100%;
            ${heroBg}
          `}
        >
          <div
            css={css`
              /* hero */
              height: ${heroHeight}px;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            {hero}
          </div>
        </div>
      )}

      <div
        css={css`
          /* children */
          position: absolute;
          top: ${contentTop}px;
          left: ${paddingHoriz}px;
          width: ${contentWidth}px;
          height: ${contentHeight}px;
          overflow: hidden;
        `}
      >
        {children}
      </div>

      {buttons && (
        <div
          css={css`
            /* buttons container */
            position: absolute;
            bottom: 0;
            left: 0;
            line-height: 0;
            width: 100%;
          `}
        >
          <div
            css={css`
              /* buttons */
              height: ${buttonsHeight}px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${buttonsBg};
            `}
          >
            {buttons}
          </div>
        </div>
      )}

      {menuEntries && (
        <Fragment>
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
              onClick={() => setShowMenu(true)}
            >
              <IconVertDots size={iconSize} />
            </div>
          </div>
          <OutsideClick action={() => setShowMenu(false)}>
            <div css={floatCss}>
              {menuEntries.map((e) => (
                <div
                  css={menuEntryCss}
                  key={e.message}
                  onClick={() => {
                    if (e.onClick) {
                      e.onClick();
                    }
                  }}
                >
                  {cssMenuText ? (
                    <span css={css(cssMenuText)}>{e.message}</span>
                  ) : (
                    <span>{e.message}</span>
                  )}
                </div>
              ))}
            </div>
          </OutsideClick>
        </Fragment>
      )}
    </div>
  );
};
