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

const TokenPage = () => {
  return (
    <div className="pl-8 py-8">
      <div className="flex gap-20">
        <div className="space-y-6">
          <img src={logo} className="h-6 w-auto" />
          <div className="text-2xl font-extrabold">
            Create Your Own Token, Attract More Followers
          </div>
          <button className="rounded px-6 h-10 flex justify-center items-center text-white bg-blue-500">
            Create Token
          </button>
        </div>
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
            <div className="text-sm">
              0x1d8E4495d281A311b6e472112e51681431B4426e
            </div>
          </div>
        </div>
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
        {mockNfts.map((nft) => (
          <TokenCard nft={nft} />
        ))}
      </div>
    </div>
  );
};
export default TokenPage;
