import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { useMediaQuery } from 'react-responsive';
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
  proportions?: number[]; // width proportions of columns. must have the same number of total columns
  showLabelsNarrow?: boolean;
  showLabelsWide?: boolean;
  showControlButtons?: boolean;
  narrowWidth?: number;
  colorMainNarrow?: string;
  colorMainWide?: string;
  colorMissing?: string;
  colorIconMainColumn?: string;
  colorBorderMainColumn?: string;
  styleMainNarrow?: SerializedStyles;
  styleMainWide?: SerializedStyles;
  styleLabelsNarrow?: SerializedStyles;
  styleLabelsWide?: SerializedStyles;
  styleText?: SerializedStyles;
  missingDataMessage?: string;
  controlHideAllText?: string;
  controlShowAllText?: string;
  controlHeight?: number;
  controlButtonsProps?: IButtonProps;
}

type IHiddenRows = { [i: number]: boolean };

export const FlexTable: React.FC<IFlexTableProps> = ({
  mainColumn,
  rows,
  columns,
  labels,
  proportions,
  showLabelsNarrow = true,
  showLabelsWide = true,
  showControlButtons = true,
  narrowWidth = 600,
  colorMainNarrow = 'slategrey',
  colorMainWide = '#ccc',
  colorMissing = '#e62739',
  colorIconMainColumn = 'white',
  colorBorderMainColumn = 'white',
  styleMainNarrow = css`
    color: white;
    font-weight: bold;
  `,
  styleMainWide = css`
    color: #484848;
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
  controlHeight = 34,
  controlButtonsProps = {
    height: 28,
  },
}) => {
  const [hiddenRows, setHiddenRows] = useState<IHiddenRows>({});
  const isNarrow = useMediaQuery({ maxWidth: narrowWidth });

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
  if (!proportions) {
    proportions = allColumns.map((_, j) => 1);
  } else if (proportions.length !== allColumns.length) {
    proportions = allColumns.map((_, j) => 1);
  }
  const total = proportions.reduce((a, c) => a + c, 0);
  const widths = proportions.map((w, j) => (100 * w) / total);

  const valueOrEmpty = (rowIndex: number, colLabel: string) => {
    if (!rows[rowIndex]) {
      return null;
    }
    if (hasProp(rows[rowIndex], colLabel)) {
      const value = (rows[rowIndex] as any)[colLabel];
      if (typeof value === 'string' || typeof value === 'number') {
        if (isNarrow) {
          return <span css={colLabel === mainColumn ? styleMainNarrow : styleText}>{value}</span>;
        } else {
          return <span css={colLabel === mainColumn ? styleMainWide : styleText}>{value}</span>;
        }
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

  const styleControl = css`
    position: relative;
    height: ${controlHeight}px;
    display: ${showControlButtons ? 'block' : 'none'};
    @media all and (min-width: ${narrowWidth + 1}px) {
      display: none;
    }
  `;

  const styleControlButtons = css`
    position: absolute;
    bottom: 3px;
    right: 3px;
    @media all and (max-width: ${narrowWidth}px) {
      display: block;
    }
  `;

  const styleHeader = css`
    display: flex;
    align-items: center;
    padding: 0;
    line-height: 1.2em;
    @media all and (max-width: ${narrowWidth}px) {
      display: none;
    }
  `;

  const styleColumns = `
    flex-grow: 1;
    box-sizing: border-box;
    padding: 0.8em 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    list-style: none;
  `;

  const styleFirstColumn = css`
    background-color: ${colorMainWide};
    position: relative;
    @media all and (max-width: ${narrowWidth}px) {
      background-color: ${colorMainNarrow};
      display: block;
      width: 100% !important;
      cursor: pointer;
    }
    border-bottom: 1px solid ${colorBorderMainColumn};
    ${styleColumns}
  `;

  const styleControlIcon = css`
    color: ${colorIconMainColumn};
    position: absolute;
    right: 12px;
    top: 12px;
    display: none;
    @media all and (max-width: ${narrowWidth}px) {
      display: block;
    }
  `;

  const styleContent = css`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    @media all and (max-width: ${narrowWidth}px) {
      display: block;
    }
  `;

  const styleLabelContainer = css`
    display: none;
    @media all and (max-width: ${narrowWidth}px) {
      display: block;
    }
  `;

  return (
    <div>
      {/* ----------------- control ----------------- */}
      <div css={styleControl}>
        {/* control buttons */}
        <div css={styleControlButtons}>
          <Button
            onClick={() => {
              setHiddenRows(rows.reduce((a, _, i) => ({ ...a, [i]: true }), {} as IHiddenRows));
            }}
            {...controlButtonsProps}
          >
            {controlHideAllText}
          </Button>{' '}
          <Button onClick={() => setHiddenRows({})} {...controlButtonsProps}>
            {controlShowAllText}
          </Button>
        </div>
      </div>

      {/* ----------------- header ----------------- */}
      {showLabelsWide && (
        <div css={styleHeader}>
          {allColumns.map((col, j) => (
            <div
              key={col}
              css={css`
                width: ${widths[j]}%;
                ${styleColumns}
              `}
            >
              <span css={styleLabelsWide}>{(allLabels as any)[col]}</span>
            </div>
          ))}
        </div>
      )}

      {/* ----------------- content ----------------- */}
      <div css={styleContent}>
        {/* for each row */}
        {rows.map((_, i) => (
          <React.Fragment key={i}>
            {/* first column => mainColumn */}
            <div
              css={css`
                width: ${widths[0]}%;
                ${styleFirstColumn}
              `}
              onClick={() => setHiddenRows({ ...hiddenRows, [i]: !hiddenRows[i] })}
            >
              {/* data */}
              {valueOrEmpty(i, mainColumn)}

              {/* control icon */}
              <div css={styleControlIcon}>
                {hiddenRows[i] ? <IconAngleDown size={24} /> : <IconAngleUp size={24} />}
              </div>
            </div>

            {/* other columns */}
            {otherColumns.map((col, J) => (
              <div
                key={col}
                css={css`
                  width: ${widths[J + 1]}%;
                  @media all and (max-width: ${narrowWidth}px) {
                    display: ${hiddenRows[i] ? 'none' : 'block'};
                    width: 100% !important;
                  }
                  @media all and (min-width: ${narrowWidth + 1}px) {
                    border-top: ${i === 0 ? 1 : 0}px solid #ccc;
                  }
                  border-bottom: 1px solid #ccc;
                  ${styleColumns}
                `}
              >
                {/* label */}
                {showLabelsNarrow && (
                  <div css={styleLabelContainer}>
                    <span css={styleLabelsNarrow}>{(allLabels as any)[col]}</span>
                  </div>
                )}

                {/* data */}
                {valueOrEmpty(i, col)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
