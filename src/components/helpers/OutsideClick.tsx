import React, { useRef, useEffect } from 'react';

// Reference: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

// hook that calls action when the user clicks outside of the passed ref
export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, action: () => void) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        action();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [action]);
};

export interface IOutsideClickProps {
  action: () => void;
}

// component that calls action if you click outside of it
export const OutsideClick: React.FC<IOutsideClickProps> = ({ action, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, action);
  return <div ref={wrapperRef}>{children}</div>;
};
