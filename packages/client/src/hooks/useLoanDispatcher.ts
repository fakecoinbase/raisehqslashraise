import { useState } from 'react';
// import AppContext from '../components/AppContext';
import useWallet from './useWallet';
import useWeb3 from './useWeb3';
import useAsyncEffect from './useAsyncEffect';

const useLoanDispatcher = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const { web3 } = useWeb3();
  const metamask = useWallet();
  useAsyncEffect(async () => {
    if (metamask) {
      try {
        const contract = await metamask.addContract('LoanDispatcher');
        const account = await metamask.getPrimaryAccount();
        setActiveContract({
          deploy: async (
            minAmount,
            amount,
            minInterestRate,
            maxInterestRate,
            termMonthsLength,
            acceptMinimum,
            auctionTermLength
          ) => {
            const auctionSecondsLength = auctionTermLength.toString();
            const termSecondsLength = termMonthsLength.toString();
            const params = [
              web3.utils.toWei(acceptMinimum ? minAmount.toString() : amount.toString(), 'ether'),
              web3.utils.toWei(amount.toString(), 'ether'),
              web3.utils.toWei(minInterestRate.toString()),
              web3.utils.toWei(maxInterestRate.toString()),
              termSecondsLength,
              auctionSecondsLength
            ];

            return contract.methods.deploy(...params).send({ from: account });
          }
        });
      } catch (error) {
        console.error('Contract LoanDispatcher not found in current network.', error);
      }
    }
  }, [metamask]);

  return activeContract;
};

export default useLoanDispatcher;
