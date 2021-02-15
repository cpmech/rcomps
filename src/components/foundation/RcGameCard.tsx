/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import { RcIconVertDots } from '../icons';
import { floatBoxCss, floatBoxItemCss } from './floatBoxCss';
import { OutsideClick } from '../helpers';

export interface RcGameCardMenuEntry {
  message: string;
  onClick: () => void;
}

export interface RcGameCardProps {
  width?: string;
  height?: string;
  iconSize?: string;
  iconPadding?: string;
  borderRadius?: string;
  bgColor?: string;

  menuEntries?: RcGameCardMenuEntry[];
  menuWidthBox?: string; // width of entries box
  menuHeightBox?: string; // height of entries box
  menuZIndexBox?: number; // zIndex of box
  menuEntryHeight?: string;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: string;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;

  paddingHoriz?: string;
  paddingVert?: string;

  heroHeight?: string;
  heroBg?: string;
  hero?: any;

  buttonsHeight?: string;
  buttonsBg?: string;
  buttons?: any;

  noZoom?: boolean;

  cssTitle?: string;
  cssMenuText?: string;
}

export const RcGameCard: React.FC<RcGameCardProps> = ({
  width = '280px',
  height = '435px',
  iconSize = '20px',
  iconPadding = '25px',
  borderRadius = '8px',
  bgColor = '#ffffff',

  menuEntries,
  menuWidthBox,
  menuHeightBox,
  menuZIndexBox = 1,
  menuEntryHeight = '50px',

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = '52px',

  title,

  paddingHoriz = '20px',
  paddingVert = '10px',

  heroHeight = '100px',
  heroBg = `background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);`,
  hero,

  buttonsHeight = '60px',
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

  const dhHero = hero ? `- ${heroHeight}` : '';
  const dtHero = hero ? `+ ${heroHeight}` : '';
  const dhButtons = buttons ? `- ${buttonsHeight}` : '';
  const contentWidth = `calc(${width} - 2 * ${paddingHoriz})`;
  let contentHeight = `calc(${height} - ${headerHeight} - 2 * ${paddingVert} ${dhHero} ${dhButtons})`;
  let contentTop = `calc(${headerHeight} + ${paddingVert} ${dtHero})`;

  const floatCss = menuEntries
    ? floatBoxCss(showMenu, menuHeightBox, menuWidthBox, true, menuZIndexBox)
    : undefined;

  const menuEntryCss = menuEntries ? floatBoxItemCss(paddingHoriz, menuEntryHeight) : undefined;

  return (
    <div
      css={css`
        * {
          margin: 0;
          padding: 0;
        }
        position: relative;
        width: ${width};
        height: ${height};
        background-color: ${bgColor};
        overflow: hidden;
        border-radius: ${borderRadius};
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
            left: ${paddingHoriz};
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
              height: ${headerHeight};
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
            top: ${headerHeight};
            left: 0;
            width: 100%;
            ${heroBg}
          `}
        >
          <div
            css={css`
              /* hero */
              height: ${heroHeight};
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
          top: ${contentTop};
          left: ${paddingHoriz};
          width: ${contentWidth};
          height: ${contentHeight};
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
              height: ${buttonsHeight};
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
                width: calc(${iconSize} + ${iconPadding});
                height: ${headerHeight};
                color: ${headerColor};
              `}
              onClick={() => setShowMenu(true)}
            >
              <RcIconVertDots size={iconSize} />
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
