import React, { useState, useRef, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Link } from './Link';
import { IPickerEntry } from './Picker';
import { getFloatCss } from './styles';

export interface IPickerTypeAProps {
  entries: IPickerEntry[];
  selected?: string; // title [use on uncontrolled component]
  value?: string; // title [use on controlled component]
  size?: number; // height of floating box
  name?: string;
  label?: string;
  height?: number;
  width?: string;
  borderRadius?: number;
  fontSize?: number;
  labelFontSize?: number;
  scaleLabel?: number;
  paddingHoriz?: number;
  labelPaddingHoriz?: number;
  color?: string;
  mutedColor?: string;
  hlColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  marginVert?: number;
  messageStyle?: SerializedStyles;
  iconPaddingRight?: number;
}

export const PickerTypeA: React.FC<IPickerTypeAProps> = ({
  entries,
  selected,
  value,
  size,
  name,
  label,
  height = 50,
  borderRadius = 300,
  width = '100%',
  fontSize = 18,
  labelFontSize = 18,
  scaleLabel = 0.8,
  paddingHoriz = 20,
  labelPaddingHoriz = 5,
  color = '#484848',
  mutedColor = '#898989',
  hlColor = '#1ca086', // green
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  darkMode,
  marginVert,
  messageStyle,
  iconPaddingRight = 15,
}) => {
  const [btnText, setBtnText] = useState(selected || '');
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
  }, [refRoot]);

  const handleButtonClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const deltaLabel = height / 2 + labelFontSize / 2;
  const deltaLine = height / 2;
  const marginTop = marginVert || (scaleLabel * labelFontSize) / 2;

  if (darkMode) {
    color = 'white';
    hlColor = 'white';
    mutedColor = '#cccccc';
  }

  const floatCss = getFloatCss(open, size);

  return (
    <div ref={refRoot}>
      <div
        css={css`
          position: relative;
          height: ${height}px;
          margin-top: ${marginTop}px;
          width: ${width};

          input {
            font-size: ${fontSize}px;
            box-sizing: border-box;
            height: ${height}px;
            width: 100%;
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
            border: 1px solid ${borderColor};
            border-radius: ${borderRadius}px;
            color: ${color};
            background-color: ${bgColor};
            resize: none;
            outline: none;
            text-align: left;
          }
          input[required]:focus {
            border-color: ${hlColor};
          }
          input[required]:focus + label[placeholder]:before {
            color: ${hlColor};
          }
          input[required]:invalid + label[placeholder][alt]:before {
            content: attr(placeholder);
          }
          input[required] + label[placeholder] {
            display: block;
            pointer-events: none;
            line-height: ${labelFontSize}px;
            margin-top: -${deltaLabel}px;
          }
          input[required] + label[placeholder]:before {
            transform-origin: center left;
            transform: translate(0, -${deltaLine}px) scale(${scaleLabel}, ${scaleLabel});
            padding-left: ${labelPaddingHoriz}px;
            content: attr(placeholder);
            display: inline-block;
            font-size: ${labelFontSize}px;
            margin-left: ${paddingHoriz + labelPaddingHoriz}px;
            padding-right: ${labelPaddingHoriz}px;
            color: ${mutedColor};
            white-space: nowrap;
            transition: 0.3s ease-in-out;
            background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
            background-size: 100% ${height}px;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      >
        <input
          name={name}
          required={true}
          type="button"
          value={value || btnText}
          onClick={handleButtonClick}
        />
        <label placeholder={label}></label>
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize}px;
            top: ${height / 2 - fontSize / 2}px;
            right: ${iconPaddingRight}px;
            color: ${color};
          `}
          onClick={handleButtonClick}
        >
          {open ? <IconAngleUp size={fontSize} /> : <IconAngleDown size={fontSize} />}
        </div>
      </div>
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
