import { useRef, useEffect } from 'react';
import _ from 'underscore';
import { toChecksumAddress } from 'web3-utils';
import { NULL_ADDRESS } from '../commons/constants';
import useForceUpdate from './useForceUpdate';
import useWeb3 from './useWeb3';
import useDepositContract from './useDepositContract';
import useWallet from './useWallet';

// Matches
const matchAccount = (walledAccount, storedAccount) => {
  try {
    if (
      walledAccount &&
      storedAccount &&
      toChecksumAddress(walledAccount) === toChecksumAddress(storedAccount)
    ) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const matchNetwork = (targetNetwork, network) => targetNetwork.indexOf(network) !== -1;
const matchProvider = web3 => {
  if (web3 && web3.currentProvider) return true;
  return false;
};

const checkHasDeposit = async (depositContract, walletAccount) => {
  if (walletAccount && walletAccount !== NULL_ADDRESS) {
    const hasDeposit = depositContract ? await depositContract.hasDeposited(walletAccount) : false;
    return hasDeposit;
  }
  return false;
};

const web3CheckList = (
  web3, // Web3 object
  walletAccount, // Wallet Account
  storedAccount, // Wallet Stored in database
  walletNetwork, // Wallet Network
  targetNetwork, // Default Network
  hasDeposit // Has Deposit
) => ({
  hasProvider: matchProvider(web3),
  unlocked: walletAccount !== undefined && walletAccount !== null && walletAccount !== NULL_ADDRESS,
  walletAccount,
  storedAccount,
  accountMatches: matchAccount(walletAccount, storedAccount),
  walletNetwork,
  targetNetwork,
  networkMatches: matchNetwork(targetNetwork, walletNetwork),
  hasDeposit
});

const useWeb3Checker = storedAccount => {
  const { getWeb3, getPrimaryAccount } = useWeb3();
  const int: any = useRef();
  const forceUpdate = useForceUpdate();
  const depositContract = useDepositContract();
  const wallet = useWallet();
  const web3State = useRef(
    web3CheckList(getWeb3(), null, storedAccount, 'NO_NETWORK', 'NO_NETWORK', false)
  );

  useEffect(() => {
    const check = async () => {
      const web3 = getWeb3();
      if (web3 && web3.currentProvider) {
        try {
          const walletAccount = await getPrimaryAccount();
          const hasDeposit = await checkHasDeposit(depositContract, walletAccount);
          const walletNetwork = wallet ? await wallet.getNetwork() : 'NO_NETWORK';
          const targetNetwork = wallet ? await wallet.getContractsNetwork() : 'NO_NETWORK';
          const newState = web3CheckList(
            web3,
            walletAccount,
            storedAccount,
            walletNetwork,
            targetNetwork,
            hasDeposit
          );

          if (!_.isEqual(newState, web3State.current)) {
            web3State.current = newState;
            forceUpdate();
          }
        } catch (err) {
          const errorState = web3CheckList(
            web3,
            null,
            NULL_ADDRESS,
            'NO_NETWORK',
            'NO_NETWORK',
            false
          );
          web3State.current = errorState;
        }
      }
    };

    if (!int.current) int.current = setInterval(check, 1000);
    return () => {
      // if (int.current) {
      //   clearInterval(int.current);
      //   int.current = null;
      // }
    };
  }, [storedAccount, wallet]);

  return web3State.current;
};

export default useWeb3Checker;
