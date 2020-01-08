import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage, ConfirmText } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';

const Confirm = () => {
  return (
    <ConfirmWrapper>
      <div>
        <MainImage src={`${IMAGES_PATH}check.svg`} />
      </div>
      <ConfirmHeader>Check your inbox to verify your account</ConfirmHeader>
      <ConfirmText>
        In order to access Raise you will need to use one of the following wallets: Metamask, Opera
        Touch or Coinbase. We just sent you an email with all the information.
      </ConfirmText>
      <ConfirmText>
        In the meantime, our team is developing new mobile integrations. We will keep you posted.
      </ConfirmText>
    </ConfirmWrapper>
  );
};

export default Confirm;
