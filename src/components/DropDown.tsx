import React, { useState, useEffect, useRef } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Link } from './Link';
import { Pair } from './Pair';

export interface IDropDownEntry {
  message: string;
  href?: string;
  onClick?: () => void;
}

export interface IDropDownProps {
  title: string;
  entries: IDropDownEntry[];
  replaceTitleWithSelected?: boolean; // should be used with given width
  showOnHover?: boolean;
  withIcon?: boolean;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  backgroundColor?: string;
  hoverColor?: string;
  height?: number;
  paddingHoriz?: number;
  borderRadius?: number;
  width?: number;
  size?: number;
}

export const DropDown: React.FC<IDropDownProps> = ({
  title,
  entries,
  replaceTitleWithSelected = false,
  showOnHover = true,
  withIcon = true,
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  fontSize = 14,
  fontWeight = 'normal',
  height = 40,
  paddingHoriz = 28,
  borderRadius = 0,
  width,
  size,
}) => {
  const [buttonWidth, setButtonWidth] = useState(width || 0);
  const [selected, setSelected] = useState(title);
  const [open, setOpen] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (refButton.current) {
      setButtonWidth(refButton.current.offsetWidth);
      console.log('>>>', refButton.current.offsetWidth);
    }
  }, [refButton]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!showOnHover) {
      setOpen(!open);
    }
  };

  const handleOnMouseEnter = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (showOnHover) {
      setOpen(true);
    }
  };

  const handleOnMouseLeave = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (showOnHover) {
      setOpen(false);
    }
  };

  const buttonContent = () => {
    if (!withIcon) {
      return selected;
    }
    if (showOnHover || !open) {
      return <Pair left={selected} right={<IconAngleDown size={fontSize} />} />;
    }
    return <Pair left={selected} right={<IconAngleUp size={fontSize} />} />;
  };

  return (
    <div
      css={css`
        position: relative;
        display: inline-block;
      `}
    >
      <button
        ref={refButton}
        css={css`
          ${buttonWidth > 0 ? `width: ${buttonWidth}px;` : ''}
          height: ${height}px;
          padding-left: ${paddingHoriz}px;
          padding-right: ${paddingHoriz}px;
          border-radius: ${borderRadius}px;
          border-width: 0;
          color: ${color};
          background-color: ${backgroundColor};
          font-size: ${fontSize}px;
          font-weight: ${fontWeight};
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: ${hoverColor};
          }
        `}
        onClick={handleButtonClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {buttonContent()}
      </button>
      <div
        css={css`
          display: ${open ? 'block' : 'none'};
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          ${size && `height: ${size}px; overflow: auto;`}
          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
          }
          a:hover {
            background-color: #f1f1f1;
          }
        `}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {entries.map(e => (
          <Link
            key={e.message}
            href={e.href}
            onClick={() => {
              setOpen(false);
              if (replaceTitleWithSelected) {
                if (refButton.current) {
                  console.log('###', buttonWidth);
                }
                setSelected(e.message);
              }
              if (e.onClick) {
                e.onClick();
              }
            }}
          >
            {e.message}
          </Link>
        ))}
      </div>
    </div>
  );
};
