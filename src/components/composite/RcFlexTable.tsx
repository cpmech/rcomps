/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import { hasProp } from '@cpmech/basic';
import { useMediaQuery } from 'react-responsive';
import { IconAngleDown, IconAngleUp, IconPen } from '@cpmech/react-icons';
import { RcButton, RcButtonProps } from '../foundation';

export type RcFlexTableLabels = { [column: string]: string };

export type RcFlexTableEntry = { [column: string]: any };

export interface RcFlexTableProps {
  mainColumn: string;
  rows: RcFlexTableEntry[];

  columns?: string[]; // labels of columns: used to sort and select specific columns
  labels?: RcFlexTableLabels; // label-to-text conversion; may have missing entries
  units?: RcFlexTableLabels; // label-to-text conversion; may have missing entries
  aligns?: RcFlexTableLabels; // label-to-text conversion; may have missing entries
  proportions?: number[]; // width proportions of columns. must have the same number of total columns

  hideMainLabelWide?: boolean; // hide main label on wide view
  showLabelsNarrow?: boolean;
  showLabelsWide?: boolean;
  showMissingLabels?: boolean;
  showControlButtons?: boolean;
  narrowWidth?: string;

  colorMainNarrow?: string;
  colorMainWide?: string;
  colorMissing?: string;
  colorIconMainColumn?: string;
  colorBorderNarrow?: string;
  colorBorderWide?: string;
  colorBorderMainNarrow?: string;
  colorBorderMainWide?: string;

  cssMainNarrow?: string;
  cssMainWide?: string;
  cssLabelsNarrow?: string;
  cssLabelsWide?: string;
  cssText?: string;

  missingDataMessage?: string;
  controlHideAllText?: string;
  controlShowAllText?: string;
  controlHeight?: string;
  controlButtonsProps?: RcButtonProps;
  showHideIconSize?: string;
  hpadding?: string;
  vpadding?: string;
  hgapControlButtons?: string;
  verticalButtonsMainNarrow?: boolean;
  onEdit?: (i: number, itemId?: string) => void;
}

export type IHiddenRows = { [i: number]: boolean };

export const RcFlexTable: React.FC<RcFlexTableProps> = ({
  mainColumn,
  rows,

  columns,
  labels,
  units,
  aligns,
  proportions,

  hideMainLabelWide = true,
  showLabelsNarrow = true,
  showLabelsWide = true,
  showMissingLabels = true,
  showControlButtons = true,
  narrowWidth = '600px',

  colorMainNarrow = 'slategrey',
  colorMainWide = '#ccc',
  colorMissing = '#e62739',
  colorIconMainColumn = 'white',
  colorBorderNarrow = '#ccc',
  colorBorderWide = '#ccc',
  colorBorderMainNarrow = 'white',
  colorBorderMainWide = 'white',

  cssMainNarrow = `color: white; font-weight: bold;`,
  cssMainWide = `color: #484848; font-weight: bold;`,
  cssLabelsNarrow = `color: #5d5c61; font-weight: bold; font-size: 0.8em;`,
  cssLabelsWide = `color: #5d5c61; font-weight: bold; font-size: 1.2em;`,
  cssText = `color: #5d5c61;`,

  missingDataMessage = 'Missing data',
  controlHideAllText = 'Hide all',
  controlShowAllText = 'Show all',
  controlHeight = '34px',
  controlButtonsProps = {
    height: '28px',
  },
  showHideIconSize = '18px',
  hpadding = '1.0em',
  vpadding = '0.8em',
  hgapControlButtons = '6px',
  verticalButtonsMainNarrow,
  onEdit,

  //
}) => {
  //

  const [hiddenRows, setHiddenRows] = useState<IHiddenRows>({});
  const isNarrow = useMediaQuery({ maxWidth: narrowWidth });

  if (rows.length < 1) {
    return null;
  }

  // list of columns
  const allColumns = columns || Object.keys(rows[0]);
  if (allColumns.findIndex((col) => col === mainColumn) < 0) {
    allColumns.unshift(mainColumn);
  }

  // list of columns that are not the "mainColumn"
  const otherColumns = allColumns.filter((col) => col !== mainColumn);

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
    proportions = allColumns.map(() => 1);
  } else if (proportions.length !== allColumns.length) {
    proportions = allColumns.map(() => 1);
  }
  const total = proportions.reduce((a, c) => a + c, 0);
  const widths = proportions.map((w) => (100 * w) / total);

  const valueOrEmpty = (rowIndex: number, colLabel: string) => {
    if (!rows[rowIndex]) {
      return null;
    }
    if (hasProp(rows[rowIndex], colLabel)) {
      const value = (rows[rowIndex] as any)[colLabel];
      if (typeof value === 'string' || typeof value === 'number') {
        if (isNarrow) {
          return (
            <span css={colLabel === mainColumn ? css(cssMainNarrow) : css(cssText)}>{value}</span>
          );
        } else {
          return (
            <span css={colLabel === mainColumn ? css(cssMainWide) : css(cssText)}>{value}</span>
          );
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
    height: ${controlHeight};
    display: ${showControlButtons ? 'block' : 'none'};
  `;

  const styleControlButtons = css`
    position: absolute;
    bottom: ${hgapControlButtons};
    right: 0;
  `;

  const styleHeader = css`
    display: flex;
    align-items: flex-start;
    padding: 0;
  `;

  const styleColumnsNarrow = `
    box-sizing: border-box;
    padding: ${vpadding} ${hpadding};
    overflow: hidden;
  `;

  const styleColumnsWide = `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: ${vpadding} ${hpadding};
    overflow: hidden;
  `;

  const styleLabelsWideExtra = css`
    text-overflow: ellipsis;
    white-space: nowrap;
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
    width: calc(2.5 * ${showHideIconSize});
    height: calc(2.5 * ${showHideIconSize});
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
      <Fragment>
        {/* ----------------- control ----------------- */}
        <div css={styleControl}>
          <div css={styleControlButtons}>
            <RcButton
              onClick={() => {
                setHiddenRows(rows.reduce((a, _, i) => ({ ...a, [i]: true }), {} as IHiddenRows));
              }}
              {...controlButtonsProps}
            >
              {controlHideAllText}
            </RcButton>{' '}
            <RcButton onClick={() => setHiddenRows({})} {...controlButtonsProps}>
              {controlShowAllText}
            </RcButton>
          </div>
        </div>

        {/* ----------------- content ----------------- */}
        {rows.map((_, i) => (
          <Fragment key={i}>
            {/* --- first column --- */}
            <div css={styleFirstColumnNarrow}>
              <div css={styleContainerNarrow}>{valueOrEmpty(i, mainColumn)}</div>
              <div css={styleActionIcons}>
                {onEdit && (
                  <Fragment>
                    <div
                      css={styleActionIcon}
                      onClick={() => {
                        if (hasProp(rows[i], 'itemId')) {
                          onEdit(i, rows[i].itemId);
                        } else {
                          onEdit(i);
                        }
                      }}
                    >
                      <IconPen size={showHideIconSize} />
                    </div>
                    {verticalButtonsMainNarrow && (
                      <div
                        css={css`
                          margin-bottom: ${vpadding};
                        `}
                      ></div>
                    )}
                  </Fragment>
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
            {otherColumns.map((col) => (
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
                    <span css={css(cssLabelsNarrow)}>{(allLabels as any)[col]}</span>
                  </div>
                )}
                {valueOrEmpty(i, col)}
              </div>
            ))}
          </Fragment>
        ))}
      </Fragment>
    );
  }

  // wide ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Fragment>
      {/* ----------------- header ----------------- */}
      {showLabelsWide && (
        <Fragment>
          <div css={styleHeader}>
            {allColumns.map((col, j) => (
              <div
                key={col}
                css={css`
                  width: ${widths[j]}%;
                  ${aligns && aligns[col] ? `align-items: ${aligns[col]};` : 'align-items: center;'}
                  ${styleColumnsWide}
                `}
              >
                {j === 0 && hideMainLabelWide ? null : (
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    `}
                  >
                    <div css={[css(cssLabelsWide), styleLabelsWideExtra]}>
                      {(allLabels as any)[col]}
                    </div>
                    {units && (
                      <div css={[css(cssLabelsWide), styleLabelsWideExtra]}>
                        {(units as any)[col] || ''}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Fragment>
      )}

      {/* ----------------- content ----------------- */}
      {rows.map((_, i) => (
        <div
          key={i}
          css={styleRowWide}
          onClick={() => {
            if (onEdit) {
              if (hasProp(rows[i], 'itemId')) {
                onEdit(i, rows[i].itemId);
              } else {
                onEdit(i);
              }
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
                border-top: ${i === 0 ? `1px` : `0px`} solid ${colorBorderWide};
                border-bottom: 1px solid ${colorBorderWide};
                ${aligns && aligns[col] ? `align-items: ${aligns[col]};` : 'align-items: center;'}
                ${styleColumnsWide}
              `}
            >
              {valueOrEmpty(i, col)}
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
