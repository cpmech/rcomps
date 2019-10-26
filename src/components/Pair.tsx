import React, { ReactNode } from 'react';

interface IPairProps {
  left: ReactNode;
  right: ReactNode;
  spacing?: number;
  styleLeft?: React.CSSProperties;
  styleRight?: React.CSSProperties;
  spaceBetween?: boolean;
}

export const Pair: React.FC<IPairProps> = ({
  left,
  right,
  spacing = 10,
  styleLeft,
  styleRight,
  spaceBetween,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: spaceBetween ? 'space-between' : 'center',
        alignItems: 'center',
        lineHeight: 0,
      }}
    >
      <span style={{ paddingRight: spacing, ...styleLeft }}>{left}</span>
      <span style={styleRight}>{right}</span>
    </div>
  );
};
