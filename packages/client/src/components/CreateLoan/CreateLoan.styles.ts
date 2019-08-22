import styled from 'styled-components';
import {
  Select,
  Checkbox,
  Card,
  Header as HeaderUI,
  Button,
  ButtonProps,
  Divider as DividerUI,
  HeaderProps,
  DividerProps
} from 'semantic-ui-react';
import { device, size } from '../LayoutV2/breakpoints';
import theme from '../../theme';

interface LoanFormValueProps {
  big?: boolean;
}

export const Header = styled(HeaderUI)<HeaderProps>`
  && {
    color: #3c4251;
  }
`;

export const TopHeader = styled(HeaderUI)<HeaderProps>`
  && {
    color: #3c4251;
    max-width: 300px;
    font-size: 22px;
    @media ${device.laptop} {
      font-size: 26px;
    }
  }
`;

export const Divider = styled(DividerUI)<DividerProps>`
  &&&&& {
    border-top: none;
    border-bottom: 1px solid #9498a0;
  }
`;

export const LoanSelect = styled(Select)`
  padding: 20px !important;

  i {
    top: auto !important;
  }
`;

export const LoanDescription = styled.div`
  box-sizing: border-box;

  @media ${device.laptop} {
    max-width: 396px;
  }
`;

export const LoanBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  background: none;
  padding: 30px 0px;
  position: relative;
`;

export const LoanContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const LoanForm = styled.div`
  max-width: 735px;
  width: 100%;
  height: fit-content;
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  padding: 30px 16px;
  background: #fff;
  font-size: 16px;
  & ${LoanBox}:first-child {
    padding: 0px 0px 30px 0px;
  }
  @media ${device.laptop} {
    font-size: 14px;
    padding: 40px 50px 50px;
    background: #fff;
  }
`;

export const LoanFormInput = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  @media ${device.laptop} {
    margin-top: 60px;
    width: unset;
  }
`;

export const LoanTerm = styled(LoanBox)`
  & ${LoanFormInput} {
    margin-top: 47px;
    display: block;
    width: 100%;
  }
  &&&& ${LoanSelect} {
    display: block;
    width: 100%;
  }
  @media ${device.laptop} {
    & ${LoanFormInput} {
      max-width: 180px;
    }
    &&&& ${LoanSelect} {
      max-width: 180px;
    }
  }
`;

export const LoanDescriptionLowerAmount = styled(LoanDescription)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
  & ${Header}:first-child {
    font-size: 1.07142857rem;
    flex: 1.6;
  }
  & ${LoanFormInput} {
    flex: 1;
  }
  @media ${device.laptop} {
    max-width: unset;
    width: 100%;
    & ${Header}:first-child {
      max-width: 396px;
      font-size: 1.28571429rem;
      flex: unset;
    }
    & ${LoanFormInput} {
      margin-top: 0px;
      flex: unset;
    }
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.laptop} {
    margin-top: 36px;
    & .slider {
      order: 1;
    }
  }
`;
export const LoanConfirmation = styled(Card)`
  &&& {
    position: sticky;
    bottom: 0px;
    height: fit-content;
    width: 100%;
    padding: 30px 20px 20px 20px;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  }

  @media ${device.laptopM} {
    &&& {
      box-shadow: none;
      border-top: 1px solid black;
      border-radius: 0;
      position: relative;
      margin-top: 0px;
      top: 0px;
      width: 100%;
      max-width: 735px;
      padding: 50px;
    }
  }

  @media (min-width: ${size.laptop}) and (max-width: ${size.laptopL}) {
    &&& {
      box-shadow: none;
      border-top: 1px solid black;
      border-radius: 0;
      position: relative;
      margin-top: 0px;
      top: 0px;
      width: 100%;
      max-width: 735px;
      padding: 50px;
    }
  }

  @media ${device.laptopXL} {
    &&& {
      border-radius: 4px;
      box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
      border-top: 0;
      max-width: 380px;
      margin-left: 35px;
      margin-top: 30px;
    }
  }
`;

export const LoanResume = styled.div`
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: space-between;

  & .divider.vertical::before {
    height: calc(100%);
  }

  & .divider.vertical::after {
    height: calc(100%);
  }

  @media (min-width: ${size.laptop}) and (max-width: ${size.laptopL}) {
    & .divider.vertical {
      display: none;
    }
  }

  @media ${device.laptopXL} {
    justify-content: center;
    flex-direction: column;
    & .divider.vertical {
      display: none;
    }
  }
`;

export const LoanFormInfo = styled.p`
  text-align: right;
  font-size: 12px;
  margin: 0;
`;

export const LoanFormValue = styled('p')<LoanFormValueProps>`
  text-align: right;
  font-size: ${({ big }) => (big ? '26px' : '18px')};
  font-weight: bold;
  margin: 0px 0px 17px 0px;
`;

export const InputDescription = styled.div`
  font-size: 14px;
  font-family: Lato;
  @media ${device.laptop} {
    min-width: 190px;
    margin-right: 24px;
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const LoanInputBox = styled.div`
  border-bottom: 1px solid #90a1b5;
  background-color: #eff4f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    max-width: 140px;
    border: none !important;
    margin-right: 5px;
    box-sizing: border-box;
    background: none !important;
    font-size: 26px;
    font-weight: bold;
    color: #5c5d5d;
    text-align: right;
  }
  @media ${device.laptop} {
    justify-content: flex-end;
    max-width: 200px;
  }
`;

export const NewLoanAnchor = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
  color: #00a76f;
  font-size: 14px;
  font-weight: bold;
`;
export const LoanAmountBox = styled(LoanBox)`
  & ${LoanInputBox}:first-child {
    margin-top: 10px;
  }
  @media ${device.laptop} {
    & ${LoanInputBox}:first-child {
      margin-top: 10px;
    }
  }
`;

export const LoanInputLabel = styled.div`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;
  & > p {
    font-weight: normal;
    font-size: 12px;
  }
  @media ${device.laptop} {
    text-align: right;
  }
`;

export const MininumLoanSelect = styled(LoanSelect)`
  &&&& {
    min-width: 120px;
  }
`;

export const LoanCheckbox = styled(Checkbox)`
  &&&&&& label:before {
    background: #3c4251;
  }
  &&&&&&.checked label:before {
    background: linear-gradient(180deg, #39b54a 0%, #34aa44 100%);
  }
`;

export const InterestCard = styled.div`
  height: 48px;
  width: 200px;
  border-radius: 4px;
  background-color: white;
  color: #495b70;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media ${device.laptop} {
    margin: unset;
    order: 2;
    font-weight: bold;
    border: 1px solid #9398a0;
  }
`;

export const ConfirmButton: any = styled(Button)<ButtonProps>`
  &&&&& {
    height: 60px;
    width: 100%;
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    border-radius: 4px;
    display: block;
    align-content: center;
    justify-content: center;
    color: #ffffff;
    padding: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin: 40px 0px 0px 0px;
  }
`;

export const WaitingButton: any = styled(ConfirmButton)`
  &&&&&& {
    background: #eff4f7;
  }
`;

export const SideInfo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  color: #5a5a5a;
  margin-top: 20px;
  font-size: 12px;
  @media ${device.laptop} {
    order: 3;
    text-align: right;
  }
`;

export const InputError = styled.div`
  color: ${theme.colors.error};
`;

export const MinAmount = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;

  p {
    margin-right: 15px;
    position: relative;
    top: 5px;
  }
`;
