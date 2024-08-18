
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'react-web3-nft',
  projectId: '1231231',
  chains: [mainnet, polygon, optimism, arbitrum, base],
});
