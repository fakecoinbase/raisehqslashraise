import React, { useState, useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { getReferralAddress } from '../../services/user';
import { StyledAddress as Web3Address } from './Deposit.styles';
import { CardSized } from '../LayoutV2/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';
import { toWei } from 'web3-utils';
import { getWeb3 } from '../../utils';
import { CardContent } from '../LayoutV2/Layout.styles';
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const switchDepositMethod = async (depositContract, account, referrer_code) => {
  const defaultMethod = {
    depositMethod: depositContract.deposit,
    params: [account]
  };
  if (!referrer_code) {
    return defaultMethod;
  }
  const [{ address: referrerAddress }] = await getReferralAddress(referrer_code);
  if (referrerAddress && referrerAddress) {
    return {
      depositMethod: depositContract.depositWithReferral,
      params: [account, referrerAddress]
    };
  }
  return defaultMethod;
};

const Deposit = (props: any) => {
  const {
    history,
    store: {
      user: {
        details: { id, referrer_code }
      }
    },
    web3Status: { account, hasDeposited }
  }: any = useContext(AppContext);
  const [status, setStatus] = useState(UI.Deposit);
  const heroTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();

  useEffect(() => {
    if (status !== UI.Success && hasDeposited) {
      setStatus(UI.Success);
    }
  }, [status, hasDeposited]);

  const TagManager = label => {
    return useGoogleTagManager(
      id,
      'www.raise.it',
      'Deposit',
      '/deposit',
      'DepositPage',
      'dataLayer',
      'Submit',
      label
    );
  };

  const handleDeposit = async () => {
    try {
      const web3 = getWeb3();
      const { BN } = web3.utils;
      TagManager('Deposit Attempt');
      setStatus(UI.Waiting(UISteps.Approve));
      const { depositMethod, params }: any = await switchDepositMethod(
        depositContract,
        account,
        referrer_code
      );
      const allowance = new BN(await heroTokenContract.allowance(account, depositContract.address));
      if (allowance.lt(new BN(toWei('200')))) {
        await heroTokenContract.approveDeposit(account, 200);
      }
      setStatus(UI.Waiting(UISteps.Transaction));
      await depositMethod(...params);
      TagManager('Deposit Success');
      setStatus(UI.Success);
    } catch (error) {
      console.error(error);
      setStatus(UI.Error);
    }
  };

  const handleContinue = async () => {
    const refMode = process.env.REACT_APP_REFERAL === 'true' ? true : false;

    if (history && refMode) {
      history.push('/referral');
    } else if (history && !refMode) {
      history.push('/');
    }
  };

  const handleRetry = async () => {
    setStatus(UI.Deposit);
  };

  const getImagesUrl = useImages();

  return (
    <Grid.Row>
      <CardSized centered>
        <CardContent extra>
          <Web3Address />
        </CardContent>
        {getViewResponse(status, handleDeposit, handleContinue, handleRetry, getImagesUrl)}
      </CardSized>
    </Grid.Row>
  );
};

export default Deposit;
