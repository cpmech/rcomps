import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';
import { Button } from './Button';
import { hasProp } from './helpers';

export type IFlexTableLabels = { [column: string]: string };
export type IFlexTableEntry = { [column: string]: any };

export interface IFlexTableProps {
  keyColumn: string;
  rows: IFlexTableEntry[];
  labels?: IFlexTableLabels;
  showLabelsNarrow?: boolean;
  showLabelsWide?: boolean;
  narrowWidth?: number;
  fontweightKeyColumn?: string;
  colorKeyColumn?: string;
  colorMissing?: string;
  styleLabelsNarrow?: SerializedStyles;
  styleLabelsWide?: SerializedStyles;
  styleText?: SerializedStyles;
  missingDataMessage?: string;
}

type IHiddenRows = { [i: number]: boolean };

export const FlexTable: React.FC<IFlexTableProps> = ({
  keyColumn,
  rows,
  labels,
  showLabelsNarrow = true,
  showLabelsWide = true,
  narrowWidth = 600,
  fontweightKeyColumn = 'bold',
  colorKeyColumn = 'slategrey',
  colorMissing = '#e62739',
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
}) => {
  const [hiddenRows, setHiddenRows] = useState<IHiddenRows>({});

  if (rows.length < 1) {
    return null;
  }

  const rowsNames = rows
    .filter(row => !!(row as any)[keyColumn])
    .map(row => (row as any)[keyColumn]);

  const allColumns = Object.keys(rows[0]);
  const otherColumns = allColumns.filter(col => col !== keyColumn);
  const allLabels = allColumns.reduce(
    (a, c) => ({ ...a, [c]: labels && hasProp(labels, c) ? labels[c] : '' }),
    {},
  );

  const nCols = allColumns.length;
  const cellWidth = 100 / nCols;

  return (
    <div>
      <div
        css={css`
          position: relative;
          /* height: 40px; */
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
              setHiddenRows(
                rowsNames.reduce((a, _, i) => ({ ...a, [i]: true }), {} as IHiddenRows),
              );
            }}
            height={32}
            width="100px"
          >
            Hide all
          </Button>{' '}
          <Button onClick={() => setHiddenRows({})} height={32} width="100px">
            Show all
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
        {rowsNames.map((name, i) => (
          <React.Fragment key={i}>
            {/* first column => key */}
            <div
              css={css`
                width: ${cellWidth}%;
                background-color: ${colorKeyColumn};
                color: white;
                position: relative;
                font-weight: ${fontweightKeyColumn};
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
                border-bottom: 1px solid white;
              `}
              onClick={() => setHiddenRows({ ...hiddenRows, [i]: !hiddenRows[i] })}
            >
              <div>{name}</div>
              <div
                css={css`
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
                <div>
                  {hasProp(rows[i], col) ? (
                    typeof (rows[i] as any)[col] === 'string' ? (
                      <span css={styleText}>{(rows[i] as any)[col]}</span>
                    ) : (
                      (rows[i] as any)[col]
                    )
                  ) : (
                    <span
                      css={css`
                        color: ${colorMissing};
                      `}
                    >
                      {missingDataMessage}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
