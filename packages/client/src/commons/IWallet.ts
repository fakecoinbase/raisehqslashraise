import Web3 from 'web3';
import CryptoWallets from './cryptoWallets';

export interface IWallet {
  conn: Web3;
  name: CryptoWallets;
}
