/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcMenuComp } from './menuComponents';
import { rcDefaultMenuOptions, RcMenuEntry, RcMenuOptions } from './RcMenuTypes';

export interface RcMenuHorizProps {
  entries: RcMenuEntry[];
  options?: RcMenuOptions;
  width?: string;
  height?: string;
  minHeight?: string;
  marginTop?: string;
  paddingVert?: string;
  gapVert?: string;
  gapHorizEntries?: string;
}

export const RcMenuHoriz: React.FC<RcMenuHorizProps> = ({
  entries,
  options,
  width = '100%',
  height = '100%',
  minHeight,
  marginTop = '10px',
  paddingVert = '5px',
  gapVert = '5px',
  gapHorizEntries,
}) => {
  const opts = options || rcDefaultMenuOptions({});

  const styleRoot = css`
    ${minHeight ? `min-height: ${minHeight};` : ''}
    ${opts.maxWidth ? `max-width: ${opts.maxWidth}; margin: 0 auto;` : ''}
      height: ${height};
    padding: ${paddingVert} ${opts.paddingHoriz};
    margin-top: ${marginTop};
    ${opts.bgColor ? `background-color: ${opts.bgColor};` : ''}
    display:flex;
    justify-content: center;
    align-items: center;
  `;

  const styleContainer = css`
    width: ${width};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -${gapVert};
    > * {
      margin-top: ${gapVert};
    }
  `;

  const styleGapBetweenEntries = css`
    margin-left: ${gapHorizEntries};
  `;

  return (
    <div css={styleRoot}>
      <div css={styleContainer}>
        {entries.map((entry, i) => (
          <Fragment key={i}>
            {/* gap between entries */}
            {gapHorizEntries && i > 0 && <div css={styleGapBetweenEntries}></div>}

            {/* the entry */}
            <div>
              <RcMenuComp entry={entry} options={opts} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
