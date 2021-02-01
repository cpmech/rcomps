/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { getFloatCss, ITypeAProps, getTypeAcss } from './styles';

export interface IPickerEntry {
  message: string;
  onClick?: () => void;
  title?: string; // set title with this instead of message
}

export interface IPickerTypeAProps extends ITypeAProps {
  entries: IPickerEntry[];
  selected?: string; // title [use on uncontrolled component]
  value?: string; // title [use on controlled component]
  name?: string;
  label?: string;
  widthBox?: string; // width of entries box
  heightBox?: number; // height of entries box
  boxToRight?: boolean;
  iconPaddingRight?: number;
  readOnly?: boolean;
  cssMessage?: string;
}

export const PickerTypeA: React.FC<IPickerTypeAProps> = ({
  entries,
  selected,
  value,
  name,
  label,
  widthBox,
  heightBox,
  boxToRight,
  iconPaddingRight = 15,
  readOnly = false,
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

  const root = getTypeAcss(readOnly, true, rest);
  const floatCss = getFloatCss(open, heightBox, widthBox, boxToRight);
  const { fontSize = 18, height = 50, color = '#484848' } = rest;

  return (
    <div ref={refRoot}>
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
              line-height: ${fontSize}px;
              top: ${height / 2 - fontSize / 2}px;
              right: ${iconPaddingRight}px;
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
            style={{ cursor: 'pointer' }}
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
