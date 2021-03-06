export interface Loan {
  id: string;
  tokenAddress: string;
  principal: string;
  maxAmount: string;
  operatorFee: string;
  termEndTimestamp: string;
  netBalance: string | null;
  auctionEnded: boolean;
  auctionEndBlock: string;
  interestRate: string;
  borrowerDebt: string;
  lenderAmount?: string | null;
  investorCount: number;
  originator?: string;
}
