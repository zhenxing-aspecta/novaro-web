import NftDemo from "@/assets/img/nft-demo.png";
import { TNft } from "../../types/token-types";

export default function NFTCard({ nft }: { nft: TNft }) {
  return (
    <div className="rounded-md border border-[#eee]">
      <img src={nft.imageUrl || NftDemo} className="h-[240px]" />
      <div className="space-y-4 p-4">
        <div className="font-bold">{nft.name}</div>
        <div className="flex items-center gap-1">
          <span className="text-[#BFBFCA]">Created by : </span>
          <a
            href="https://eips.ethereum.org/EIPS/eip-6551"
            target="_blank"
            className="text-blue-400"
          >
            {nft.creator.wallet_address}
          </a>
        </div>
        <div className="text-white/70">{nft.description}</div>
        <input
          placeholder="Enter the Amount"
          className="w-full border border-[#eee] h-10 px-2 bg-black/5 rounded"
        />
        <button className="bg-blue-500 rounded w-full h-10 flex items-center justify-center text-white">
          Buy
        </button>
      </div>
    </div>
  );
}
