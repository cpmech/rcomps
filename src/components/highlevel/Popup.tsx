/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Modal } from '../Modal';
import { SpinCircle } from '../SpinCircle';
import { ProgressBar } from '../ProgressBar';

export interface IPopupProps {
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
  vspaceTop?: number;
  vspaceMiddle?: number;
  vspaceBottom?: number;

  colorSpinner?: string;
}

export const Popup: React.FC<IPopupProps> = ({
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
  vspaceTop = 20,
  vspaceMiddle = 20,
  vspaceBottom = 30,

  colorSpinner = '#236cd2',

  children,
}) => {
  // the content
  const renderContent = () => (
    <div
      css={css`
        margin-top: ${vspaceTop}px;
        margin-bottom: ${vspaceBottom}px;
      `}
    >
      {title && (
        <div
          css={css`
            color: ${isError ? colorTitleError : isLoading ? colorTitleLoading : colorTitle};
            font-size: ${fontSizeTitle};
            font-weight: ${fontWeightTitle};
            margin-bottom: ${vspaceMiddle}px;
          `}
        >
          {title}
        </div>
      )}
      {message}
      {children}
      {progress && <ProgressBar progress={progress} />}
      {isLoading && (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <SpinCircle color={colorSpinner} />
        </div>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose} minWidth={minWidth} maxWidth={maxWidth} maxHeight={maxHeight}>
      {renderContent()}
    </Modal>
  );
};
