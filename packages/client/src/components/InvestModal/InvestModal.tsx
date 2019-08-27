
import React, { useState } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
// import { Loader, Header } from 'semantic-ui-react';
// import { isMobile } from 'react-device-detect';
import { InvestModalProps } from './types';

import InvestState from './InvestState';
import ProcessingState from './ProcessingState';
import SuccessState from './SuccessState';

import {
  LenderButton,
  Modal,
  ExitButton,
} from './InvestModal.styles';

const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  // Waiting: [],
  Success: [],
  // Error: ['error']
});

const InvestModal: React.SFC<InvestModalProps> = ({ loan }) => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(UI.Confirm);
  const [investment, setInvestment] = useState();
  
  const openModal = () => {
    setStage(UI.Confirm)
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
  
  const getInvestAction = (stage) => {
    return stage.cata({
      Confirm: () => (
        <InvestState loan={loan} setStage={setStage} setInvestment={setInvestment} ui={UI} />
      ),
      Processing: () => (
        <ProcessingState loan={loan} investment={investment} ui={UI} setStage={setStage} />
      ),
      Success: () => (
        <SuccessState setStage={setStage} ui={UI} closeModal={closeModal} />
      ),
      // Error: () => (
      // )
    });
  }

  

  return (
    <>
      <LenderButton onClick={openModal}>Invest</LenderButton>
      <Modal open={open} size="small" onClose={closeModal}>

        <SemanticModal.Content>
          {getInvestAction(stage)}

          <ExitButton size="normal" name="close" color="black" onClick={closeModal}/>

        </SemanticModal.Content>
      </Modal>
    </>
  );
}

export default InvestModal;