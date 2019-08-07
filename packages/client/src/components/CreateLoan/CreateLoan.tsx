import React, { useState, useEffect } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import numeral from 'numeral';
import {
  CreateLoanInputLabel,
  BloodWrapper,
  CreateLoanInput,
  CreateLoanSelect,
  CreateLoanCheckbox,
  BloodCardMain,
  BloodCardContent,
  BloodCardFloat,
  DAILogo,
  InterestCard,
  LoanCreationReview,
  ConfirmButton,
  SideInfo,
  InputError,
} from './CreateLoan.styles';
import Slider from '../Slider';
import Card from '../Card';
import months from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';

numeral.defaultFormat('0.0,');

const min = 10000;
const max = 2500000;
const CreateLoan = () => {
  const loanDispatcher = useLoanDispatcher();
  const inputRef: any = React.createRef();
  const [amountValidation, setAmountValidation] = useState({
    error: false,
    msg: ''
  });
  const [APR, setAPR] = useState(0);
  const [loan, setLoan] = useState({
    amount: numeral(min).format(),
    term: 0,
    mir: 0,
    accept: false,
    minAmount: 0
  });

  // Calculations
  const numberAmount = numeral(loan.amount).value();
  const repaymentAmount = numeral((numberAmount + (numberAmount * loan.mir) / 100).toFixed(2)).format();
  const netLoan = numeral(numberAmount - (numberAmount * 1) / 100).format();
  const systemFees = numeral((numberAmount * 1) / 100).format();
  const totalInterest = numeral(((numberAmount * loan.mir) / 100).toFixed(2)).format()

  const onSetAmount = e => {
    const cursor = e.target.selectionStart;
    setLoan({ ...loan, amount: numeral(e.target.value).format() });
    if (inputRef.current != null) {
      inputRef['current']['selectionEnd'] = cursor + 1;
    }
  }

  const onSetTerm = (e, data) =>
    setLoan({ ...loan, term: parseFloat(data.value) });

  const onSetMIR = mir => setLoan({ ...loan, mir });

  const onToggleAccept = () => setLoan({ ...loan, accept: !loan.accept });

  const onMinAmount = e => setLoan({ ...loan, minAmount: e.target.value });

  const onInterestChange = value => onSetMIR(parseFloat(value));

  const onSave = async () => {
    const deploy = await loanDispatcher.deploy(
      loan.minAmount,
      loan.amount,
      loan.mir,
      loan.term
    );

    //WAIT FOR CONFIRMATION UI
    console.log(deploy);
  };

  const onBlur = e => {
    const { value } = e.target;
    const currentValue = numeral(value).value();
    setAmountValidation({
      error: currentValue < min || currentValue > max,
      msg: `Can not be ${
        currentValue < 10000 ? 'less than 1.000' : 'more than 250.000.000'
      }`
    });
  };

  useEffect(() => {
    const { amount, term, mir } = loan;
    const currentAmount = numeral(amount).value()
    if (currentAmount && mir && term) {
      setAPR((((currentAmount * mir * term) / currentAmount) * 12) / term);
    }
  }, [loan]);

  return (
    <BloodWrapper>
      <BloodCardMain className="first">
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h2">How much would you like to borrow?</Header>
            <p>
              Please enter the amount you would like to borrow ( Min 10.000 /
              Max 2.5M )
            </p>
          </BloodCardContent>
          <BloodCardFloat>
            <CreateLoanInput>
              <input
                ref={inputRef}
                value={loan.amount}
                onChange={onSetAmount}
                onBlur={onBlur}
              />
              <DAILogo>
                <Icon name="ethereum" size="large" />
              </DAILogo>
              <CreateLoanInputLabel>
                {amountValidation.error ? (
                  <InputError>{amountValidation.msg}</InputError>
                ) : loan.amount ? (
                  `${loan.amount} €`
                ) : (
                  '0'
                )}
              </CreateLoanInputLabel>
            </CreateLoanInput>
          </BloodCardFloat>
          <SideInfo>* Based on current exchange rate</SideInfo>
        </BloodWrapper>
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h3">
              Would you accept a lower amount than the requested?
            </Header>
            <p>
              In some cases, loan auctions don't achieve the target amount for
              different reasons
            </p>
            {loan.accept && (
              <BloodWrapper className="content">
                <BloodCardContent>
                  <p>Please select how much less, minimum 10.000 DAI</p>
                </BloodCardContent>
                <BloodCardFloat>
                <CreateLoanInput>
                  <input
                    max="2500000"
                    min="10000"
                    type="number"
                    onChange={onMinAmount}
                    onBlur={onBlur}
                  />
                  <DAILogo>
                    <Icon name="ethereum" size="large" />
                  </DAILogo>
                  <CreateLoanInputLabel>
                    {amountValidation.error ? (
                      <InputError>{amountValidation.msg}</InputError>
                    ) : loan.amount ? (
                      `${loan.amount} €`
                    ) : (
                      '0'
                    )}
                  </CreateLoanInputLabel>
                </CreateLoanInput>
               </BloodCardFloat>
               <SideInfo>* Based on current exchange rate</SideInfo>
              </BloodWrapper>
            )}
          </BloodCardContent>
          <BloodCardFloat>
            <CreateLoanCheckbox
              toggle
              label={loan.accept ? 'YES' : 'NO'}
              onChange={onToggleAccept}
            />
          </BloodCardFloat>
        </BloodWrapper>
        <BloodWrapper className="content separator">
          <BloodCardContent>
            <Header as="h2">Loan term</Header>
            <p>
              The loan term will start after the loan auction is finished. This
              process could take from a few days up to 30 days. You will be able
              to check the auction progress from your dashboard.
            </p>
          </BloodCardContent>
          <BloodCardFloat>
            <CreateLoanSelect
              onChange={onSetTerm}
              placeholder="Select term"
              options={months}
            />
          </BloodCardFloat>
        </BloodWrapper>
        <BloodWrapper className="content">
          <BloodCardContent>
            <Header as="h2">Monthly interest rate *</Header>
            <p>
              Select the maximun interest rate you would accept for your loan.
            </p>
            <Slider onChange={onInterestChange} min={0} max={3} />
          </BloodCardContent>
          <BloodCardFloat>
            <InterestCard>
              <span>
                {loan.mir}% MIR* ({APR.toFixed(2)}% APR)
              </span>
            </InterestCard>
          </BloodCardFloat>
          <SideInfo>* MIR : Monthly simple interest rate</SideInfo>
        </BloodWrapper>
      </BloodCardMain>
      <BloodCardFloat className="lone">
        <Card>
          <LoanCreationReview>
            <div className="reviewBlock">
              <div className="title">Loan amount</div>
              <div className="info main">{loan.amount} DAI</div>
              <div className="subtitle">System fees (1%)</div>
              <div className="info">{systemFees} DAI</div>
              <div className="subtitle">Net loan proceeds</div>
              <div className="info">
                {netLoan}
              </div>
            </div>
            <div className="reviewBlock border">
              <div className="title">Total repayment amount</div>
              <div className="info main">
                {repaymentAmount} DAI
              </div>
              <div className="subtitle">Principal</div>
              <div className="info">{loan.amount} DAI</div>
              <div className="subtitle">Interest</div>
              <div className="info">
                {totalInterest} DAI
              </div>
            </div>
            <ConfirmButton
              onClick={onSave}
              disabled={
                amountValidation.error ||
                loan.term === 0 ||
                loan.mir === 0 ||
                numberAmount === 0
              }
            >
              Confirm
            </ConfirmButton>
          </LoanCreationReview>
        </Card>
      </BloodCardFloat>
    </BloodWrapper>
  );
};

export default CreateLoan;
