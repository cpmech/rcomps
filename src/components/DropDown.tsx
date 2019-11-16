import React, { useState, useEffect, useRef } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Link } from './Link';
import { Pair } from './Pair';
import { getButtonCss, getFloatCss } from './styles';

export interface IDropDownEntry {
  message: string;
  href?: string;
  onClick?: () => void;
}

export interface IDropDownProps {
  title: string;
  entries: IDropDownEntry[];
  showOnHover?: boolean;
  withIcon?: boolean;
  width?: string;
  height?: number;
  widthBox?: string; // width of entries box
  heightBox?: number;
  paddingHoriz?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  messageStyle?: SerializedStyles;
}

export const DropDown: React.FC<IDropDownProps> = ({
  title,
  entries,
  showOnHover = true,
  withIcon = true,
  width,
  height = 40,
  widthBox,
  heightBox,
  paddingHoriz = 28,
  borderRadius = 0,
  fontSize = 14,
  fontWeight = 'normal',
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  messageStyle,
}) => {
  const [open, setOpen] = useState(false);
  const refRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refRoot.current && e.target) {
        if (!refRoot.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refRoot, showOnHover]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
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

  const buttonContent = !withIcon ? (
    title
  ) : showOnHover || !open ? (
    <Pair left={title} right={<IconAngleDown size={fontSize} />} spaceBetween={true} />
  ) : (
    <Pair left={title} right={<IconAngleUp size={fontSize} />} spaceBetween={true} />
  );

  const buttonCss = getButtonCss(
    width,
    height,
    paddingHoriz,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    hoverColor,
  );

  const floatCss = getFloatCss(open, heightBox, widthBox);

  return (
    <div
      ref={refRoot}
      css={css`
        position: relative;
        display: inline-block;
        ${width && `width:${width};`}
      `}
    >
      <button
        css={buttonCss}
        onClick={handleButtonClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {buttonContent}
      </button>
      <div css={floatCss} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        {entries.map(e => (
          <Link
            key={e.message}
            href={e.href}
            onClick={() => {
              setOpen(false);
              if (e.onClick) {
                e.onClick();
              }
            }}
          >
            {messageStyle ? <span css={messageStyle}>{e.message}</span> : <span>{e.message}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};
