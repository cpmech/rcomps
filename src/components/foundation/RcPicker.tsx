/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { floatBoxCss, floatBoxItemCss } from './floatBoxCss';
import { inputElementCss, InputElementCssOptions } from './inputElementCss';

export interface RcPickerEntry {
  message: string;
  onClick?: () => void;
  title?: string; // set title with this instead of message
}

export interface RcPickerProps extends InputElementCssOptions {
  entries: RcPickerEntry[];
  selected?: string; // title [use on uncontrolled component]
  value?: string; // title [use on controlled component]
  name?: string;
  label?: string;
  widthBox?: string; // width of entries box
  heightBox?: string; // height of entries box
  boxToRight?: boolean;
  zIndexBox?: number;
  iconPaddingRight?: string;
  readOnly?: boolean;
  menuPaddingHoriz?: string;
  menuEntryHeight?: string;
  cssMessage?: string;
}

export const RcPicker: React.FC<RcPickerProps> = ({
  entries,
  selected,
  value,
  name,
  label,
  widthBox,
  heightBox,
  boxToRight,
  zIndexBox = 1,
  iconPaddingRight = '15px',
  readOnly = false,
  menuPaddingHoriz = '20px',
  menuEntryHeight = '50px',
  cssMessage,
  ...rest
}) => {
  const [btnText, setBtnText] = useState('');
  const [open, setOpen] = useState(false);
  const refRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBtnText(selected || '');
  }, [selected]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (readOnly) {
        return;
      }
      if (refRoot.current && e.target) {
        if (!refRoot.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }
    };
    if (!readOnly) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [refRoot, readOnly]);

  const handleButtonClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (readOnly) {
      return;
    }
    e.preventDefault();
    setOpen(!open);
  };

  const root = inputElementCss(readOnly, true, rest);
  const floatCss = floatBoxCss(open, heightBox, widthBox, boxToRight, zIndexBox);
  const menuEntryCss = floatBoxItemCss(menuPaddingHoriz, menuEntryHeight);
  const { fontSize = '18px', height = '50px', color = '#484848' } = rest;

  return (
    <div
      ref={refRoot}
      css={css`
        position: relative;
      `}
    >
      <div css={root}>
        <input
          name={name}
          required={true}
          type="text"
          value={value || btnText}
          onClick={handleButtonClick}
          readOnly={true}
        />
        <label placeholder={label}></label>
        {!readOnly && (
          <div
            css={css`
              position: absolute;
              line-height: ${fontSize};
              top: calc((${height} - ${fontSize}) / 2);
              right: ${iconPaddingRight};
              color: ${rest.darkMode ? 'white' : color};
            `}
            onClick={handleButtonClick}
          >
            {open ? <IconAngleUp size={fontSize} /> : <IconAngleDown size={fontSize} />}
          </div>
        )}
      </div>
      <div css={floatCss}>
        {entries.map((e) => (
          <div
            css={menuEntryCss}
            key={e.message}
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
            {cssMessage ? <span css={css(cssMessage)}>{e.message}</span> : <span>{e.message}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
