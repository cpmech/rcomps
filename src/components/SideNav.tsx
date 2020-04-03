import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IconClose } from '@cpmech/react-icons';
import { OutsideClick } from './helpers';

export interface ISideNavEntry {
  item: any;
  onClick: () => void;
}

export interface ISideNavProps {
  onClose: () => void;
  entries?: ISideNavEntry[];
  width?: number;
  iconSize?: number;
  iconPadding?: number;
  color?: string;
  bgColor?: string;
  zIndex?: number;

  menuEntryFontsize?: string;
  bottomVSpace?: number;
}

export const SideNav: React.FC<ISideNavProps> = ({
  onClose,
  entries,
  width = 250,
  iconSize = 20,
  iconPadding = 25,
  color = 'white',
  bgColor = '#484848',
  zIndex = 1111,

  menuEntryFontsize = '20px',
  bottomVSpace = 30,

  children,

  //
}) => {
  //

  return (
    <OutsideClick action={onClose}>
      <div
        css={css`
          /* side navigation menu */
          height: 100%;
          width: ${width}px;
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
        <div>
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
            <React.Fragment>
              {children}
              <div
                css={css`
                  padding-bottom: ${bottomVSpace}px;
                `}
              ></div>
            </React.Fragment>
          )}
        </div>

        <div
          css={css`
            /* close button */
            position: absolute;
            top: 0;
            right: 0;
            color: white;
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
            `}
          >
            <IconClose size={iconSize} />
          </div>
        </div>
      </div>
    </OutsideClick>
  );
};
