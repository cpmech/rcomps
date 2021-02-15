/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcIconClose } from '../icons';
import { OutsideClick } from '../helpers';
import { rcConfig } from './rcConfig';

export interface RcSideNavEntry {
  item: any;
  onClick?: () => void;
}

export interface RcSideNavProps {
  onClose: () => void;
  entries?: RcSideNavEntry[];
  width?: string;
  iconSize?: string;
  iconPadding?: string;
  color?: string;
  bgColor?: string;
  zIndex?: number;
  menuEntryFontsize?: string;
  bottomVSpace?: string;
}

export const RcSideNav: React.FC<RcSideNavProps> = ({
  onClose,
  entries,
  width = '250px',
  iconSize = '20px',
  iconPadding = '25px',
  color = 'white',
  bgColor = '#484848',
  zIndex,
  menuEntryFontsize = '20px',
  bottomVSpace = '30px',
  children,
}) => {
  zIndex = zIndex || rcConfig.zIndices.sideNav;

  return (
    <OutsideClick action={onClose}>
      <div
        css={css`
          /* side navigation menu */
          height: 100%;
          width: ${width};
          position: fixed;
          z-index: ${zIndex};
          top: 0;
          left: 0;
          color: ${color};
          background-color: ${bgColor};
          overflow-x: hidden;
          padding-top: 60px;
          transition: 0.5s;
          @media screen and (max-height: 450px) {
            .sidenav {
              padding-top: 15px;
            }
            .sidenav a {
              font-size: 18px;
            }
          }
        `}
      >
        <Fragment>
          {entries &&
            entries.map((entry, i) => {
              if (typeof entry.item === 'string') {
                return (
                  <div
                    key={i}
                    css={css`
                      cursor: pointer;
                      padding: 16px 8px 8px 32px;
                      text-decoration: none;
                      font-size: ${menuEntryFontsize};
                      display: block;
                      transition: 0.3s;
                      :hover {
                        color: #a4a4a4;
                      }
                    `}
                    onClick={entry.onClick}
                  >
                    <span>{entry.item}</span>
                  </div>
                );
              }
              return <div key={i}>{entry.item}</div>;
            })}

          {children && (
            <Fragment>
              {children}
              <div
                css={css`
                  padding-bottom: ${bottomVSpace};
                `}
              ></div>
            </Fragment>
          )}
        </Fragment>

        <div
          css={css`
            /* close button */
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
              width: calc(${iconSize} + ${iconPadding});
              height: calc(${iconSize} + ${iconPadding});
              border-radius: 2px;
            `}
          >
            <RcIconClose size={iconSize} />
          </div>
        </div>
      </div>
    </OutsideClick>
  );
};
