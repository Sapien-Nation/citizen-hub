import { Web3Provider } from '@ethersproject/providers';

export default function getLibrary(provider): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

export const displayAddress = (address: string): string => {
  return address;
};
