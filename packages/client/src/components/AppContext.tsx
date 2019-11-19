import { createContext } from 'react';

const AppContext = createContext({
  store: {},
  actions: {},
  history: {},
  modalRefs: {},
  webSocket: {},
  daiWebSocket: {},
  match: {},
  onSetGetStarted: {},
  getStarted: false,
  web3Status: {}
});

export default AppContext;