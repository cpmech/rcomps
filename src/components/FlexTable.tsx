import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { useMediaQuery } from 'react-responsive';
import { IconAngleDown, IconAngleUp, IconPen } from '@cpmech/react-icons';
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
  hideMainLabelWide?: boolean; // hide main label on wide view
  showLabelsNarrow?: boolean;
  showLabelsWide?: boolean;
  showMissingLabels?: boolean;
  showControlButtons?: boolean;
  narrowWidth?: number;
  colorMainNarrow?: string;
  colorMainWide?: string;
  colorMissing?: string;
  colorIconMainColumn?: string;
  colorBorderNarrow?: string;
  colorBorderWide?: string;
  colorBorderMainNarrow?: string;
  colorBorderMainWide?: string;
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
  showHideIconSize?: number;
  hpadding?: string;
  vpadding?: string;
  hgapControlButtons?: string;
  verticalButtonsMainNarrow?: boolean;
  onEdit?: (i: number) => void;
}

type IHiddenRows = { [i: number]: boolean };

export const FlexTable: React.FC<IFlexTableProps> = ({
  mainColumn,
  rows,
  columns,
  labels,
  proportions,
  hideMainLabelWide = true,
  showLabelsNarrow = true,
  showLabelsWide = true,
  showMissingLabels = true,
  showControlButtons = true,
  narrowWidth = 600,
  colorMainNarrow = 'slategrey',
  colorMainWide = '#ccc',
  colorMissing = '#e62739',
  colorIconMainColumn = 'white',
  colorBorderNarrow = '#ccc',
  colorBorderWide = '#ccc',
  colorBorderMainNarrow = 'white',
  colorBorderMainWide = 'white',
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
  showHideIconSize = 18,
  hpadding = '1.0em',
  vpadding = '0.8em',
  hgapControlButtons = '6px',
  verticalButtonsMainNarrow,
  onEdit,
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
    (a, c) => ({
      ...a,
      [c]: labels && hasProp(labels, c) ? labels[c] : showMissingLabels ? c : '',
    }),
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
  `;

  const styleControlButtons = css`
    position: absolute;
    bottom: ${hgapControlButtons};
    right: 0;
  `;

  const styleHeader = css`
    display: flex;
    align-items: center;
    padding: 0;
    line-height: 1.2em;
  `;

  const styleColumnsNarrow = `
    box-sizing: border-box;
    padding: ${vpadding} ${hpadding};
    overflow: hidden;
  `;

  const styleColumnsWide = `
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: ${vpadding} ${hpadding};
    overflow: hidden;
  `;

  const styleFirstColumnNarrow = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: ${colorMainNarrow};
    border-bottom: 1px solid ${colorBorderMainNarrow};
    ${!verticalButtonsMainNarrow ? `align-items: center;` : ''}
    ${styleColumnsNarrow}
  `;

  const styleContainerNarrow = css`
    overflow: hidden;
  `;

  const styleActionIcons = css`
    display: flex;
    justify-content: space-between;
    ${verticalButtonsMainNarrow ? `flex-direction:column;` : `flex-direction:row;`}
  `;

  const styleActionIcon = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colorIconMainColumn};
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    line-height: 0;
    width: ${2.5 * showHideIconSize}px;
    height: ${1.5 * showHideIconSize}px;
    margin-left: ${hpadding};
    :hover {
      background-color: rgba(0, 0, 0, 0.14);
    }
  `;

  const styleFirstColumnWide = css`
    background-color: ${colorMainWide};
    border-bottom: 1px solid ${colorBorderMainWide};
    ${styleColumnsWide}
  `;

  const styleRowHover = `
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

  const styleRowWide = css`
    display: flex;
    flex-direction: row;
    ${onEdit && styleRowHover}
  `;

  // narrow /////////////////////////////////////////////////////////////////////////////////////////

  if (isNarrow) {
    return (
      <div>
        {/* ----------------- control ----------------- */}
        <div css={styleControl}>
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

        {/* ----------------- content ----------------- */}
        {rows.map((_, i) => (
          <React.Fragment key={i}>
            {/* --- first column --- */}
            <div css={styleFirstColumnNarrow}>
              <div css={styleContainerNarrow}>{valueOrEmpty(i, mainColumn)}</div>
              <div css={styleActionIcons}>
                {onEdit && (
                  <React.Fragment>
                    <div css={styleActionIcon} onClick={() => onEdit(i)}>
                      <IconPen size={showHideIconSize} />
                    </div>
                    {verticalButtonsMainNarrow && (
                      <div
                        css={css`
                          margin-bottom: ${vpadding};
                        `}
                      ></div>
                    )}
                  </React.Fragment>
                )}
                <div
                  css={styleActionIcon}
                  onClick={() => setHiddenRows({ ...hiddenRows, [i]: !hiddenRows[i] })}
                >
                  {hiddenRows[i] ? (
                    <IconAngleDown size={showHideIconSize} />
                  ) : (
                    <IconAngleUp size={showHideIconSize} />
                  )}
                </div>
              </div>
            </div>

            {/* --- other columns --- */}
            {otherColumns.map(col => (
              <div
                key={col}
                css={css`
                  width: 100%;
                  display: ${hiddenRows[i] ? 'none' : 'block'};
                  border-bottom: 1px solid ${colorBorderNarrow};
                  ${styleColumnsNarrow}
                `}
              >
                {showLabelsNarrow && (
                  <div>
                    <span css={styleLabelsNarrow}>{(allLabels as any)[col]}</span>
                  </div>
                )}
                {valueOrEmpty(i, col)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // wide ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {/* ----------------- header ----------------- */}
      {showLabelsWide && (
        <div css={styleHeader}>
          {allColumns.map((col, j) => (
            <div
              key={col}
              css={css`
                width: ${widths[j]}%;
                ${styleColumnsWide}
              `}
            >
              {j === 0 && hideMainLabelWide ? null : (
                <span css={styleLabelsWide}>{(allLabels as any)[col]}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ----------------- content ----------------- */}
      {rows.map((_, i) => (
        <div
          key={i}
          css={styleRowWide}
          onClick={() => {
            if (onEdit) {
              onEdit(i);
            }
          }}
        >
          {/* --- first column --- */}
          <div
            css={css`
              width: ${widths[0]}%;
              ${styleFirstColumnWide}
            `}
          >
            {valueOrEmpty(i, mainColumn)}
          </div>

          {/* --- other columns --- */}
          {otherColumns.map((col, J) => (
            <div
              key={col}
              css={css`
                width: ${widths[J + 1]}%;
                border-top: ${i === 0 ? 1 : 0}px solid ${colorBorderWide};
                border-bottom: 1px solid ${colorBorderWide};
                ${styleColumnsWide}
              `}
            >
              {valueOrEmpty(i, col)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
