/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { RcMenuEntry } from './RcMenuTypes';

export interface RcTabsProps {
  entries: RcMenuEntry[];
  iniActive?: number;

  bgColor: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;

  width?: string;
  height?: string;
  tabMinWidth?: string;

  marginTop?: string;
  marginBottom?: string;
  marginHoriz?: string;
  gapHorizLabel?: string;
  entryPaddingVert?: string;
  entryPaddingHoriz?: string;

  borderWidth?: string;
  borderRadius?: string;
}

export const RcTabs: React.FC<RcTabsProps> = ({
  entries,
  iniActive,

  bgColor = 'white',
  color = '#484848',
  colorHover = '#757575',
  colorActive = '#17b580',

  width = '100%',
  height = '100%',
  tabMinWidth,

  marginTop = '10px',
  marginBottom = '0px',
  marginHoriz = '0px',
  gapHorizLabel = '10px',
  entryPaddingVert = '6px',
  entryPaddingHoriz = '12px',

  borderWidth = '1px',
  borderRadius = '8px',
}) => {
  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    if (iniActive) {
      setIndexActive(iniActive);
    }
  }, [iniActive]);

  const styles = {
    root: css`
      height: ${height};
      margin-top: ${marginTop};
      margin-bottom: ${marginBottom};
      margin-left: ${marginHoriz};
      margin-right: ${marginHoriz};
      ${bgColor ? `background-color: ${bgColor};` : ''}
      display:flex;
      justify-content: center;
      align-items: flex-end;
      border-bottom: ${borderWidth} solid ${colorActive};
    `,

    container: css`
      width: ${width};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,

    entryContainer: css`
      position: relative;
      ${tabMinWidth ? `min-width: ${tabMinWidth};` : ''}
    `,

    entry: css`
      color: ${color};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover {
        color: ${colorHover};
      }
      padding: ${entryPaddingVert} ${entryPaddingHoriz};
    `,

    entryActive: css`
      color: ${colorActive};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: ${entryPaddingVert} ${entryPaddingHoriz};
      border-left: ${borderWidth} solid ${colorActive};
      border-right: ${borderWidth} solid ${colorActive};
      border-top: ${borderWidth} solid ${colorActive};
      border-top-left-radius: ${borderRadius};
      border-top-right-radius: ${borderRadius};
    `,

    entryActiveBorder: css`
      position: absolute;
      width: calc(100% - ${borderWidth} - ${borderWidth});
      left: ${borderWidth};
      bottom: -${borderWidth};
      height: ${borderWidth};
      background-color: ${bgColor};
    `,

    hspace: css`
      margin-left: ${gapHorizLabel};
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {entries.map((entry, i) => (
          <div key={i} css={styles.entryContainer}>
            {i === indexActive && <div css={styles.entryActiveBorder} />}

            {/* given component */}
            {entry.comp}

            {/* icon and label */}
            {(entry.icon || entry.label) && (
              <div
                css={i === indexActive ? styles.entryActive : styles.entry}
                onClick={() => {
                  if (i === indexActive) {
                    return;
                  }
                  setIndexActive(i);
                  if (entry.onClick) {
                    entry.onClick();
                  }
                }}
              >
                {entry.icon}
                {entry.icon && <span css={styles.hspace} />}
                <span>{entry.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
