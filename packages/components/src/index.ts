declare global {
  interface Window {
    Chart: any;
    moment: any;
  }
}

export { default as Card } from './components/Card';
export { default as Coin } from './components/Coin';
export { default as InvestCardView } from './components/InvestCardView';
export { default as InvestCard } from './components/InvestCard';
export { default as CardPlaceholder } from './components/CardPlaceholder';
export { default as BigSimpleModal } from './components/Modals/BigSimpleModal';
export { default as Panel } from './components/Modals/Panel';
export { default as PanelWithImage } from './components/Modals/PanelWithImage';
export { default as Simple } from './components/Modals/Simple';
export { default as LoanComparatorChart } from './components/LoanComparatorChart';
export { default as Footer } from './components/Footer';
export { default as SignUp } from './components/SignUp';
export { default as LoanInformation } from './components/LoanInformation';
export { default as LoanHeader } from './components/LoanHeader';
export { default as ReferralProgram } from './components/ReferralProgram';

export { AccountType } from './types';

export { default as useDefiPulse } from './hooks/useDefiPulse';

export { default as MobileButtonLink } from './components/commons/Link';
export { default as Button } from './components/commons/ButtonControl/Button';
export { default as BloomButton } from './components/commons/ButtonControl/BloomButton';
export { default as ButtonLink } from './components/commons/ButtonControl/ButtonLink';
export { default as GroupButton } from './components/commons/ButtonControl/GroupButton';
export { default as CheckboxControl } from './components/commons/CheckboxControl';
export { default as InputNumber } from './components/commons/InputControl/InputNumber';
export { default as InputText } from './components/commons/InputControl/InputText';
export { default as SelectControl } from './components/commons/SelectControl';
export { default as useScript } from './hooks/useScript';
export { default as Header, TopHeader, SubPageHeader, SubHeader } from './components/Headers';
export { LinkComponent, HeaderProps } from './components/Headers/interfaces';
export { default as LoanActivity } from './components/LoanActivity';
export { default as AboutBorrower } from './components/AboutBorrower';
export { default as NeedHelp } from './components/NeedHelp';
export { default as PressPR } from './components/PressPR';
export { default as Testimonials } from './components/Testimonials';
export { default as BenefitsSection } from './components/BenefitsSection';
export { default as InterestRateSection } from './components/InterestRateSection';

export {
  getCurrentInstalment,
  getInstalmentAmount,
  getInstalmentPenalty,
  getCurrentDebt,
  getCurrentPenalty,
  getProgressiveState,
  getPendingInstalmentsAmount,
  getInstalmentDates,
  getStateByDate
} from './utils/progressiveCalcs';

export {
  isAuctionExpired,
  isDefaulted,
  assumeStateMachine,
  roundedTime,
  calculateTimes,
  calculateInterest,
  calculateROI,
  calculateExpectedRoi,
  calculateTotalInterest,
  calculateTotalInterestAmount,
  calculateAPR,
  calculateInvestmentReturn,
  getCoinsFromContract,
  getCoin,
  getCalculations,
  getActiveAuctions
} from './utils/loanUtils';

export { fromDecimal, toDecimal } from './utils/web3-utils';
export { RepaymentType } from './commons/graphTypes';
export { Option, ControlProps } from './commons/option';
export { ButtonProps } from './components/commons/ButtonControl/types';
