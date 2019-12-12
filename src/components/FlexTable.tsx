import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Button, IButtonProps } from './Button';
import { hasProp } from './helpers';

export type IFlexTableLabels = { [column: string]: string };
export type IFlexTableEntry = { [column: string]: any };

export interface IFlexTableProps {
  mainColumn: string;
  rows: IFlexTableEntry[];
  columns?: string[]; // labels of columns: used to sort and select specific columns
  labels?: IFlexTableLabels; // label-to-text conversion; may have missing entries
  showLabelsNarrow?: boolean;
  showLabelsWide?: boolean;
  showControlButtons?: boolean;
  narrowWidth?: number;
  colorMissing?: string;
  colorIconMainColumn?: string;
  colorBorderMainColumn?: string;
  bgColorMainColumn?: string;
  styleMainColumnText?: SerializedStyles;
  styleLabelsNarrow?: SerializedStyles;
  styleLabelsWide?: SerializedStyles;
  styleText?: SerializedStyles;
  missingDataMessage?: string;
  controlHideAllText?: string;
  controlShowAllText?: string;
  controlButtonsProps?: IButtonProps;
}

type IHiddenRows = { [i: number]: boolean };

export const FlexTable: React.FC<IFlexTableProps> = ({
  mainColumn,
  rows,
  columns,
  labels,
  showLabelsNarrow = true,
  showLabelsWide = true,
  showControlButtons = true,
  narrowWidth = 600,
  colorMissing = '#e62739',
  colorIconMainColumn = 'white',
  colorBorderMainColumn = 'white',
  bgColorMainColumn = 'slategrey',
  styleMainColumnText = css`
    color: white;
    font-weight: bold;
  `,
  styleLabelsNarrow = css`
    color: #5d5c61;
    font-weight: bold;
    font-size: 0.8em;
  `,
  styleLabelsWide = css`
    color: #5d5c61;
    font-weight: bold;
    font-size: 1.2em;
  `,
  styleText = css`
    color: #5d5c61;
  `,
  missingDataMessage = 'Missing data',
  controlHideAllText = 'Hide all',
  controlShowAllText = 'Show all',
  controlButtonsProps,
}) => {
  const [hiddenRows, setHiddenRows] = useState<IHiddenRows>({});

  if (rows.length < 1) {
    return null;
  }

  // list of columns
  const allColumns = columns || Object.keys(rows[0]);
  if (allColumns.findIndex(col => col === mainColumn) < 0) {
    allColumns.unshift(mainColumn);
  }

  // list of columns that are not the "mainColumn"
  const otherColumns = allColumns.filter(col => col !== mainColumn);

  // list of all column labels, including the "mainColumn"
  // use empty '' if the entry is missing
  const allLabels = allColumns.reduce(
    (a, c) => ({ ...a, [c]: labels && hasProp(labels, c) ? labels[c] : '' }),
    {},
  );

  // check if all labels are empty
  const allLabelsAreEmpty = Object.keys(allLabels).reduce((a, c) => {
    if ((allLabels as any)[c] !== '') {
      return false;
    }
    return a;
  }, true);

  // disable showing labels
  if (allLabelsAreEmpty) {
    showLabelsNarrow = false;
    showLabelsWide = false;
  }

  // width of cells, on Wide mode
  const cellWidth = 100 / allColumns.length;

  const valueOrEmpty = (rowIndex: number, colLabel: string) => {
    if (!rows[rowIndex]) {
      return null;
    }
    if (hasProp(rows[rowIndex], colLabel)) {
      const value = (rows[rowIndex] as any)[colLabel];
      if (typeof value === 'string' || typeof value === 'number') {
        return <span css={colLabel === mainColumn ? styleMainColumnText : styleText}>{value}</span>;
      } else {
        return value;
      }
    } else {
      return (
        <span
          css={css`
            color: ${colorMissing};
          `}
        >
          {missingDataMessage}
        </span>
      );
    }
  };

  return (
    <div>
      <div
        css={css`
          position: relative;
          height: 40px;
          display: ${showControlButtons ? 'block' : 'none'};
          @media all and (min-width: ${narrowWidth + 1}px) {
            display: none;
          }
        `}
      >
        {/* control */}
        <div
          css={css`
            position: absolute;
            bottom: 3px;
            right: 3px;
            /* display: none; */
            @media all and (max-width: ${narrowWidth}px) {
              display: block;
            }
          `}
        >
          <Button
            onClick={() => {
              setHiddenRows(rows.reduce((a, _, i) => ({ ...a, [i]: true }), {} as IHiddenRows));
            }}
            height={32}
            {...controlButtonsProps}
          >
            {controlHideAllText}
          </Button>{' '}
          <Button onClick={() => setHiddenRows({})} height={32} {...controlButtonsProps}>
            {controlShowAllText}
          </Button>
        </div>
      </div>

      {/* header */}
      {showLabelsWide && (
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0;
            line-height: 1.2em;
            @media all and (max-width: ${narrowWidth}px) {
              display: none;
            }
          `}
        >
          {allColumns.map(col => (
            <div
              key={col}
              css={css`
                width: ${cellWidth}%;
                padding: 0.8em 1.2em;
                overflow: hidden;
                list-style: none;
              `}
            >
              <span css={styleLabelsWide}>{(allLabels as any)[col]}</span>
            </div>
          ))}
        </div>
      )}

      {/* table content */}
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          @media all and (max-width: ${narrowWidth}px) {
            display: block;
          }
        `}
      >
        {rows.map((_, i) => (
          <React.Fragment key={i}>
            {/* first column => key */}
            <div
              css={css`
                background-color: ${bgColorMainColumn};
                width: ${cellWidth}%;
                position: relative;
                @media all and (max-width: ${narrowWidth}px) {
                  display: block;
                  width: 100% !important;
                  cursor: pointer;
                }
                flex-grow: 1;
                box-sizing: border-box;
                padding: 0.8em 1.2em;
                overflow: hidden;
                list-style: none;
                border-bottom: 1px solid ${colorBorderMainColumn};
              `}
              onClick={() => setHiddenRows({ ...hiddenRows, [i]: !hiddenRows[i] })}
            >
              <div>{valueOrEmpty(i, mainColumn)}</div>
              <div
                css={css`
                  color: ${colorIconMainColumn};
                  position: absolute;
                  right: 12px;
                  top: 12px;
                  display: none;
                  @media all and (max-width: ${narrowWidth}px) {
                    display: block;
                  }
                `}
              >
                {hiddenRows[i] ? <IconAngleDown size={24} /> : <IconAngleUp size={24} />}
              </div>
            </div>

            {/* other columns */}
            {otherColumns.map(col => (
              <div
                key={col}
                css={css`
                  width: ${cellWidth}%;
                  @media all and (max-width: ${narrowWidth}px) {
                    display: ${hiddenRows[i] ? 'none' : 'block'};
                    width: 100% !important;
                  }
                  flex-grow: 1;
                  box-sizing: border-box;
                  padding: 0.8em 1.2em;
                  overflow: hidden;
                  list-style: none;
                  border-bottom: 1px solid #ccc;
                  @media all and (min-width: ${narrowWidth + 1}px) {
                    border-top: ${i === 0 ? 1 : 0}px solid #ccc;
                  }
                `}
              >
                {/* label */}
                {showLabelsNarrow && (
                  <div
                    css={css`
                      display: none;
                      @media all and (max-width: ${narrowWidth}px) {
                        display: block;
                      }
                    `}
                  >
                    <span css={styleLabelsNarrow}>{(allLabels as any)[col]}</span>
                  </div>
                )}

                {/* content */}
                <div>{valueOrEmpty(i, col)}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
