import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { ILinkProps, Link } from './Link';

interface IDropDownEntry {
  message: string;
  link: ILinkProps;
}

interface IDropDownProps {
  title: string;
  entries: IDropDownEntry[];
  styles?: {
    button?: {
      backgroundColor?: string;
      hoverColor?: string;
    };
  };
}

export const DropDown: React.FC<IDropDownProps> = ({ title, entries, styles }) => {
  return (
    <div
      css={css`
        position: relative;
        display: inline-block;
        &:hover > div {
          display: block;
        }
      `}
    >
      <button
        css={css`
          background-color: ${styles && styles.button && styles.button.backgroundColor
            ? styles.button.backgroundColor
            : '#4caf50'};
          color: white;
          padding: 16px;
          font-size: 16px;
          border: none;
          cursor: pointer;
          &:hover {
            background-color: ${styles && styles.button && styles.button.hoverColor
              ? styles.button.hoverColor
              : '#3e8e41'};
          }
        `}
      >
        {title}
      </button>
      <div
        css={css`
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
          }
          a:hover {
            background-color: #f1f1f1;
          }
        `}
      >
        {entries.map(e => (
          <Link key={e.message} {...e.link}>
            {e.message}
          </Link>
        ))}
      </div>
    </div>
  );
};
