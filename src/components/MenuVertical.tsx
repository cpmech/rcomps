/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, ReactNode } from 'react';

export interface IMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  entries?: {
    icon?: ReactNode;
    label?: string;
    onClick?: () => void;
  }[];
}

export interface IMenuVerticalProps {
  entries: IMenuEntry[];

  bgColor?: string;
  color?: string;
  colorHover?: string;

  minWidth?: number;
  maxWidth?: number;

  paddingVert?: number;
  paddingHoriz?: number;
  gapVertEntries?: number;
  gapVertSubEntries?: number;
  gapHorizLabel?: number;

  fontSizeSubEntries?: string;
}

export const MenuVertical: React.FC<IMenuVerticalProps> = ({
  entries,

  bgColor,
  color = '#484848',
  colorHover = '#757575',

  minWidth,
  maxWidth,

  paddingVert = 40,
  paddingHoriz = 20,
  gapVertEntries = 20,
  gapVertSubEntries = 30,
  gapHorizLabel = 10,

  fontSizeSubEntries = '90%',
  //
}) => {
  //
  const styles = {
    root: css`
      min-width: ${minWidth}px;
      max-width: ${maxWidth}px;
      padding: ${paddingVert}px ${paddingHoriz}px;
      ${bgColor ? `background-color: ${bgColor};` : ''}
    `,

    vspaceMain: css`
      padding-top: ${gapVertEntries}px;
    `,

    vspaceSub: css`
      padding-top: ${gapVertSubEntries}px;
    `,

    entry: css`
      color: ${color};
      display: grid;
      grid-template-columns: auto auto;
      justify-content: flex-start;
      align-items: center;
    `,

    label: css`
      margin-left: ${gapHorizLabel}px;
    `,

    labelHL: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel}px;
      :hover {
        color: ${colorHover};
      }
    `,

    labelSub: css`
      cursor: pointer;
      margin-left: ${gapHorizLabel}px;
      font-size: ${fontSizeSubEntries};
      :hover {
        color: ${colorHover};
      }
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    iconSub: css`
      margin-right: ${gapHorizLabel}px;
    `,
  };

  return (
    <div css={styles.root}>
      {entries.map((entry, i) => (
        <div key={i} css={styles.vspaceMain}>
          {/* given component */}
          {entry.comp}

          {/* icon and label */}
          {(entry.icon || entry.label) && (
            <div css={styles.entry}>
              <div>{entry.icon}</div>
              <div
                css={entry.entries && !entry.onClick ? styles.label : styles.labelHL}
                onClick={entry.onClick}
              >
                {entry.label}
              </div>

              {/* sub-entries */}
              {entry.entries &&
                entry.entries.map((sub, j) => (
                  <Fragment key={`${i}-${j}`}>
                    <div css={styles.vspaceSub}></div>
                    <div css={styles.labelSub} onClick={sub.onClick}>
                      <div css={sub.icon && styles.iconSub}>{sub.icon}</div>
                      <div>{sub.label}</div>
                    </div>
                  </Fragment>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
