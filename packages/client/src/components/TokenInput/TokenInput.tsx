import React from 'react';
import { LoanInputBox } from './TokenInput.styles';
import LoanInput from '../CreateLoan/LoanInput';
import Coin from '../Coin';

interface TokenInputProps {
  value?: number;
  onValueChange?: any;
  onBlur?: any;
  numeralFormat?: string;
  error?: boolean;
  error_msg?: any;
  decimalScale?: number;
  displayType?: string;
}

const TokenInput: React.SFC<TokenInputProps> = ({
  onValueChange: onChange,
  ...props
}) => {
  const onValueChange = ({ floatValue }) =>
    onChange ? onChange(floatValue) : undefined;
  return (
    <LoanInputBox>
      <LoanInput onValueChange={onValueChange} {...props} />
      <Coin
        src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`}
        name="DAI"
      />
    </LoanInputBox>
  );
};

export default TokenInput;
