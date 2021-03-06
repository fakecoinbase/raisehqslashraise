import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../styles';
import { RepayLoanContext, Stages } from '../RepayLoan.context';

const Processing = () => {
  const { setStage, setError, setApproved }: any = useContext(RepayLoanContext);

  const reset = () => {
    setError(false);
    setApproved(false);
    setStage(Stages.Confirm);
  };
  return (
    <>
      <Header>Something went wrong</Header>
      <ConfirmButton onClick={reset}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;
