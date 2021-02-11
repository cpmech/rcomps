/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcModal } from '../layout';
import { RcSpinCircle } from '../foundation';
import { RcProgressBar } from './RcProgressBar';

export interface RcPopupProps {
  title?: string;
  message?: string;
  isError?: boolean;
  isLoading?: boolean;
  progress?: number;
  onClose?: () => void; // only used if not Error, Loading nor progress

  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  colorTitle?: string;
  colorTitleError?: string;
  colorTitleLoading?: string;
  fontSizeTitle?: string;
  fontWeightTitle?: string;
  vspaceTop?: string;
  vspaceMiddle?: string;
  vspaceBottom?: string;

  colorSpinner?: string;
}

export const RcPopup: React.FC<RcPopupProps> = ({
  title,
  message,
  isError,
  isLoading,
  progress,
  onClose,

  minWidth = '290px',
  maxWidth = '500px',
  maxHeight = '300px',
  colorTitle = '#343434',
  colorTitleError = '#c01626',
  colorTitleLoading = '#236cd2',
  fontSizeTitle = '1.2em',
  fontWeightTitle = 'bold',
  vspaceTop = '20px',
  vspaceMiddle = '20px',
  vspaceBottom = '30px',

  colorSpinner = '#236cd2',

  children,
}) => {
  // the content
  const renderContent = () => (
    <div
      css={css`
        margin-top: ${vspaceTop};
        margin-bottom: ${vspaceBottom};
      `}
    >
      {title && (
        <div
          css={css`
            color: ${isError ? colorTitleError : isLoading ? colorTitleLoading : colorTitle};
            font-size: ${fontSizeTitle};
            font-weight: ${fontWeightTitle};
            margin-bottom: ${vspaceMiddle};
          `}
        >
          {title}
        </div>
      )}
      {message}
      {children}
      {progress && <RcProgressBar progress={progress} />}
      {isLoading && (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <RcSpinCircle color={colorSpinner} />
        </div>
      )}
    </div>
  );

  return (
    <RcModal onClose={onClose} minWidth={minWidth} maxWidth={maxWidth} maxHeight={maxHeight}>
      {renderContent()}
    </RcModal>
  );
};
