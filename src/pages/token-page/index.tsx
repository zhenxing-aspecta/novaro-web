import "./index.less";
import logo from "@/assets/img/logo.svg";
import dstAccountIcon from "@/assets/img/dst-account-icon.png";
import tokenWalletBg from "@/assets/img/token-wallet-bg.png";
//@ts-ignore
import { Input } from "@web3uikit/core";
//@ts-ignore
import { Search } from "@web3uikit/icons";
import mockNfts from "../../mock-data/nfts";
import TokenCard from "./TokenCard";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { readContract } from "@wagmi/core";

import dstContract from "../../abi/tokens/DynamicSocialToken.json";
import clientContract from "../../abi/tokens/DynamicSocialToken.json";
import {
  CLIENT_CONTRACT_ADDRESS_LOCAL,
  DST_CONTRACT_ADDRESS_LOCAL,
} from "../../constants";

import "./index.less";
import { useEffect, useState } from "react";
import { cn } from "../../utils/utils";
import { TNft } from "../../types/token-types";
import { wagmiConfig } from "../../utils/wagmiConfig";

const TokenPage = () => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [followerPassTokens, setFollowerPassTokens] = useState<TNft[]>([]);
  const [createTokenLoading, setCreateTokenLoading] = useState(false);

  const { data: tokenId } = useReadContract({
    address: DST_CONTRACT_ADDRESS_LOCAL,
    abi: dstContract.abi,
    functionName: "getDstTokenId",
    args: [address],
  });

  console.log({ tokenId });

  const createToken = async () => {
    setCreateTokenLoading(true);
    await writeContractAsync({
      address: CLIENT_CONTRACT_ADDRESS_LOCAL,
      abi: clientContract.abi,
      functionName: "mint",
      args: [address, 157884],
    });
    setCreateTokenLoading(false);
  };

  const getTokens = async () => {
    const res = await readContract(wagmiConfig, {
      address: CLIENT_CONTRACT_ADDRESS_LOCAL,
      abi: clientContract.abi,
      functionName: "getFollowerPassTokenData",
      args: [address],
    });
    console.log(res);
    // setFollowerPassTokens(res);
  };

  useEffect(() => {
    // getTokens();
  }, []);

  return (
    <div className="pl-8 py-8">
      <div className="flex gap-20">
        <div className="space-y-6">
          <img src={logo} className="h-6 w-auto" />
          <div className="text-2xl font-extrabold">
            Create Your Own Token, Attract More Followers
          </div>
          <button
            className={cn(
              "btn rounded px-6 h-10 flex justify-center items-center text-white bg-blue-500",
              createTokenLoading && "loading"
            )}
            onClick={() => createToken()}
          >
            Create Token
          </button>
        </div>
        {tokenId ? (
          <div className="space-y-3 relative">
            <img
              src={tokenWalletBg}
              className="w-full h-auto absolute top-0 left-0"
            />
            <div className="relative z-10 w-full space-y-4 p-6 font-bold">
              <div className="flex space-x-2">
                <img src={dstAccountIcon} className="h-6 w-auto" />
                <span>DST Account</span>
              </div>
              <div className="text-sm">{address}</div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-16">
        <Input
          style={{
            height: "40px",
            background: "#f7f7f7", // A2A5B1
            outline: "none",
          }}
          placeholder="Search for tokens"
          width="323px"
          prefixIcon={
            <Search style={{ color: "#A2A5B1" }} className="size-3" />
          }
          name="Test text Input"
          onBlur={function noRefCheck() {}}
          onChange={function noRefCheck() {}}
        />
      </div>
      <div className="bg-[#eee] w-full h-[1px] my-8"></div>
      <div className="flex flex-wrap gap-8">
        {followerPassTokens.map((nft) => (
          <TokenCard nft={nft} key={nft.id} />
        ))}
      </div>
    </div>
  );
};
export default TokenPage;
