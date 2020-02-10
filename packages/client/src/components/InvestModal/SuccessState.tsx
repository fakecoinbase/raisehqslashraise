import React from 'react';
import { SuccessStateProps } from './types';
import { Link } from 'react-scroll';
import { HEADER_MENU_SIZE } from '../../commons/constants';
import {
  CardTitle,
  CardSubtitle,
  ButtonPink,
  ButtonWrapper,
  ModalFlexWrapper
} from './InvestModal.styles';

const SuccessState: React.SFC<SuccessStateProps> = ({ setStage, ui, closeModal }) => {
  const onOK = () => {
    closeModal();
    setStage(ui.Confirm);
  };

  return (
    <ModalFlexWrapper id="modal-success">
      <CardTitle>Your funds are safe in escrow until the auction is over</CardTitle>
      <CardSubtitle>
        Your investment will be active when the auctions end. Follow the auction progress and check
        new investment opportunities from your dashboard.
      </CardSubtitle>

      <ButtonWrapper>
        <Link to="myActivity" spy smooth duration={500} offset={HEADER_MENU_SIZE.myActivity}>
          <ButtonPink onClick={onOK}>OK</ButtonPink>
        </Link>
      </ButtonWrapper>
    </ModalFlexWrapper>
  );
};

export default SuccessState;
