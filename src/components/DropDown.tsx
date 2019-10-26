import React, { useState, useEffect, useRef } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
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
  size?: number;
  width?: number;
  height?: number;
  paddingHoriz?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
}

export const DropDown: React.FC<IDropDownProps> = ({
  title,
  entries,
  showOnHover = true,
  withIcon = true,
  size,
  width,
  height = 40,
  paddingHoriz = 28,
  borderRadius = 0,
  fontSize = 14,
  fontWeight = 'normal',
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
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
    if (!showOnHover) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [refRoot, showOnHover]);

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
      return title;
    }
    if (showOnHover || !open) {
      return <Pair left={title} right={<IconAngleDown size={fontSize} />} spaceBetween={true} />;
    }
    return <Pair left={title} right={<IconAngleUp size={fontSize} />} spaceBetween={true} />;
  };

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

  const floatCss = getFloatCss(open, size);

  return (
    <div
      ref={refRoot}
      css={css`
        position: relative;
        display: inline-block;
      `}
    >
      <button
        css={buttonCss}
        onClick={handleButtonClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {buttonContent()}
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
            {e.message}
          </Link>
        ))}
      </div>
    </div>
  );
};
