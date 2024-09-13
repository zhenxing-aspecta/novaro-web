
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon, localhost  } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'navaro-web',
  projectId: 'navaro-web',
  chains: [mainnet, polygon, optimism, arbitrum, base, localhost],
});
