/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcButton, RcButtonProps } from '../foundation';
import { Modal, IModalProps } from '../layout';

export interface IModalYesNoProps extends IModalProps {
  onYes?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onNo?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  txtYes?: string;
  txtNo?: string;
  message?: string;
  colorNo?: string;
  noAtLeft?: boolean;
  msgBtnGap?: number;
  btnWidth?: string;
  leftButtonStyle?: RcButtonProps;
  rightButtonStyle?: RcButtonProps;
}

export const ModalYesNo: React.FC<IModalYesNoProps> = ({
  onYes,
  onNo,
  title = 'Confirmation',
  txtYes = 'YES',
  txtNo = 'NO',
  message,
  colorNo = '#e62739',
  noAtLeft,
  msgBtnGap = 30,
  btnWidth,
  children,
  leftButtonStyle,
  rightButtonStyle,
  ...rest
}) => {
  return (
    <Modal title={title} {...rest}>
      <div
        css={css`
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      >
        {message ? (
          <p
            css={css`
              ${msgBtnGap ? `margin-bottom:${msgBtnGap}px;` : ''}
            `}
          >
            {message}
          </p>
        ) : (
          children
        )}
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            ${noAtLeft ? `flex-flow: row-reverse;` : ''}
          `}
        >
          <RcButton
            onClick={(e) => {
              if (rest.onClose) {
                rest.onClose();
              }
              if (onYes) {
                onYes(e);
              }
            }}
            outline={true}
            color={colorNo}
            width={btnWidth}
            {...leftButtonStyle}
          >
            {txtYes}
          </RcButton>
          <RcButton
            onClick={(e) => {
              if (rest.onClose) {
                rest.onClose();
              }
              if (onNo) {
                onNo(e);
              }
            }}
            outline={true}
            width={btnWidth}
            {...rightButtonStyle}
          >
            {txtNo}
          </RcButton>
        </div>
      </div>
    </Modal>
  );
};
