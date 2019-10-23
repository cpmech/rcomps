import React, { ReactNode } from 'react';

interface IPairProps {
  left: ReactNode;
  right: ReactNode;
  spacing?: number;
  styleLeft?: React.CSSProperties;
  styleRight?: React.CSSProperties;
}

export const Pair: React.FC<IPairProps> = ({
  left,
  right,
  spacing = 10,
  styleLeft,
  styleRight,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 0,
      }}
    >
      <span style={{ paddingRight: spacing, ...styleLeft }}>{left}</span>
      <span style={styleRight}>{right}</span>
    </div>
  );
};
