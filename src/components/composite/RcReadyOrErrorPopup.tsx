/** @jsxImportSource @emotion/react */
import { RcPopup } from './RcPopup';

export interface RcReadyOrErrorPopupProps {
  ready: boolean;
  error: string;
  onClose: () => void;
  colorError?: string;
  colorLoading?: string;
}

export const RcReadyOrErrorPopup: React.FC<RcReadyOrErrorPopupProps> = ({
  ready,
  error,
  onClose,
  colorError = '#c01626',
  colorLoading = '#255fdf',
}) => {
  if (ready) {
    return null;
  }
  if (error) {
    return (
      <RcPopup
        fontSizeTitle="14px"
        title="Error"
        message={error}
        onClose={onClose}
        colorTitle={colorError}
      />
    );
  }
  return (
    <RcPopup
      fontSizeTitle="14px"
      title="Loading..."
      isLoading={true}
      colorTitleLoading={colorLoading}
      colorSpinner={colorLoading}
    />
  );
};
