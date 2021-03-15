/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuComp } from './menuComponents';
import { rcDefaultMenuOptions, RcMenuEntry, RcMenuOptions } from './RcMenuTypes';

export interface RcMenuVertProps {
  entries: RcMenuEntry[];
  options?: RcMenuOptions;
}

export const RcMenuVert: React.FC<RcMenuVertProps> = ({ entries, options }) => {
  const opts = options || rcDefaultMenuOptions({});

  const prevWasSeparator = (i: number) => i > 0 && i < entries.length && !!entries[i - 1].separator;

  const hasSubEntries = (i: number) => i >= 0 && i < entries.length && !!entries[i].entries;

  const styleRoot = css`
    ${opts.bgColor ? `background-color: ${opts.bgColor};` : ''}
    ${opts.minWidth ? `min-width: ${opts.minWidth};` : ''};
    ${opts.maxWidth ? `max-width: ${opts.maxWidth};` : ''};
    padding-top: ${opts.paddingTop};
    padding-bottom: ${opts.paddingBottom};
    padding-left: ${opts.paddingHoriz};
    padding-right: ${opts.paddingHoriz};
  `;

  const styleMain = (i: number) =>
    i === 0
      ? ''
      : css`
          padding-top: ${prevWasSeparator(i)
            ? opts.gapVertSeparator
            : hasSubEntries(i)
            ? opts.gapVertEntries
            : opts.gapVertEntriesWithoutSub};
        `;

  const styleSeparator = (i: number) =>
    i === 0
      ? ''
      : css`
          padding-top: ${opts.gapVertSeparator};
        `;

  return (
    <div css={styleRoot}>
      {entries.map((entry, i) =>
        entry.separator ? (
          <div key={i} css={styleSeparator(i)}></div>
        ) : (
          <div key={i} css={styleMain(i)}>
            <RcMenuComp id={`${i}`} entry={entry} options={opts} />
          </div>
        ),
      )}
    </div>
  );
};
