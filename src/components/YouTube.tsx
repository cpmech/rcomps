/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface IYouTubeProps {
  youtubeId: string;
  autoplay?: string;
  rel?: string;
  modest?: string;
}

export const YouTube: React.FC<IYouTubeProps> = ({
  youtubeId,
  autoplay = '0',
  rel = '0',
  modest = '1',
}) => {
  const videoSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoplay}&rel=${rel}&modestbranding=${modest}`;
  return (
    <div
      css={css`
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
      `}
    >
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        css={css`
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        `}
        allowFullScreen
      />
    </div>
  );
};
