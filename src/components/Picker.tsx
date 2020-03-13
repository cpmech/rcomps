import React, { useState, useEffect, useRef } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Link } from './Link';
import { Pair } from './Pair';
import { getButtonCss, getFloatCss } from './styles';

export interface IPickerEntry {
  message: string;
  href?: string;
  onClick?: () => void;
  title?: string; // set title with this instead of message
}

export interface IPickerProps {
  entries: IPickerEntry[];
  selected?: string; // title [use on uncontrolled component]
  value?: string; // title [use on controlled component]
  width?: string; // button style
  height?: number; // button style
  widthBox?: string; // width of entries box
  heightBox?: number; // height of entries box
  boxToRight?: boolean;
  paddingHoriz?: number; // button style
  borderRadius?: number; // button style
  fontSize?: number; // button style
  fontWeight?: string; // button style
  color?: string; // button style
  backgroundColor?: string; // button style
  hoverColor?: string; // button style
  messageStyle?: SerializedStyles;
}

export const Picker: React.FC<IPickerProps> = ({
  entries,
  selected,
  value,
  width,
  height = 40,
  widthBox,
  heightBox,
  boxToRight,
  paddingHoriz = 28,
  borderRadius = 0,
  fontSize = 14,
  fontWeight = 'normal',
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  messageStyle,
}) => {
  const [btnText, setBtnText] = useState('');
  const [open, setOpen] = useState(false);
  const refRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBtnText(selected || '');
  }, [selected]);

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
  }, [refRoot]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const buttonContent = open ? (
    <Pair left={value || btnText} right={<IconAngleUp size={fontSize} />} spaceBetween={true} />
  ) : (
    <Pair left={value || btnText} right={<IconAngleDown size={fontSize} />} spaceBetween={true} />
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

  const floatCss = getFloatCss(open, heightBox, widthBox, boxToRight);

  return (
    <div
      ref={refRoot}
      css={css`
        position: relative;
        display: inline-block;
        ${width ? `width:${width};` : ''}
      `}
    >
      <button css={buttonCss} onClick={handleButtonClick}>
        {buttonContent}
      </button>
      <div css={floatCss}>
        {entries.map(e => (
          <Link
            key={e.message}
            href={e.href}
            onClick={() => {
              setOpen(false);
              if (!value) {
                setBtnText(e.title || e.message);
              }
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
