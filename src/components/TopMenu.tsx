import React, { ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export type ITopMenuEntry = ReactNode; // e.g. gatsby's Link or rcomps.Link components or button

export interface ITopMenuProps {
  entries: ITopMenuEntry[];
  centered?: boolean;
  desktopMaxWidth?: number;
  entriesSpacing?: number;
  entriesSpacingNarrow?: number;
  paddingLeft?: number;
  paddingRight?: number;
  minHeight?: number;
}

export const TopMenu: React.FC<ITopMenuProps> = ({
  entries,
  centered: narrow,
  desktopMaxWidth = 960,
  entriesSpacing = 30,
  entriesSpacingNarrow = 10,
  paddingLeft = 15,
  paddingRight = 15,
  minHeight = 60,
}) => {
  if (entries.length < 2) {
    throw new Error('entries array must have at least two values');
  }

  if (narrow) {
    return (
      <header
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          line-height: 0;
          padding: ${paddingLeft}px ${paddingRight}px;
        `}
      >
        {entries}
      </header>
    );
  }

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: ${minHeight}px;
        margin: auto;
        line-height: 0;
        max-width: ${desktopMaxWidth};
        padding: ${paddingLeft}px ${paddingRight}px;
      `}
    >
      <div>{entries[0]}</div>
      <div>
        {entries.slice(1).map((e, i) => (
          <span
            key={(e as any).key}
            css={css`
              padding-right: ${i < entries.length - 2 ? entriesSpacing : 0}px;
            `}
          >
            {e}
          </span>
        ))}
      </div>
    </header>
  );
};