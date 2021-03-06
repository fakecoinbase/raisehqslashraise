import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import FollowTx from 'followtx';
import Web3 from 'web3';
import connector from '../store/actions';
import reducers from '../store/reducers';

import initialState from '../store/initialState';

export const RootContext = createContext({});

interface PropsValueType {
  store: any;
  actions: any;
  isLogged: boolean;
  followTx: any;
}

export function useRootContext() {
  return useContext(RootContext);
}

export function Updater() {
  // Pending to move Root context updaters here from AppContext
  return null;
}

export default function Provider({ children }: any) {
  const [store, dispatch]: any = useReducer<any, any>(reducers, initialState, () => initialState);
  const [followTx, setFollowTx]: any = useState();

  useEffect(() => {
    if (!followTx) {
      const preFollowTx = new FollowTx(
        new Web3(`wss://${store.config.network}.infura.io/ws/v3/${process.env.REACT_APP_INFURA}`)
      );
      setFollowTx(preFollowTx);
    }
  });

  const actions: any = connector(dispatch, store);
  const values: PropsValueType = { store, actions, isLogged: false, followTx };

  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}
