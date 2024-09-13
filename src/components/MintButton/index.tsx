import { memo } from "react";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import "./index.less";
import dst from "../../contracts/tokens/DynamicSocialToken.json";
import { CONSTRACT_ADDRESS_LOCAL } from "../../constants";

const MintButton = () => {
  const { address, addresses } = useAccount();
  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const handleMint = () => isPending ||
    writeContract({
      address: CONSTRACT_ADDRESS_LOCAL,
      abi: dst.abi,
      functionName: "mint",
      args: [address, 157884],
    });

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  console.log('@mint_error', error);

  return (
    <div>
      <div className="mint_button" onClick={handleMint}>
        mint
      </div>
      <div>isPending: {isPending ? "true": "false"}</div>
      <div>hash: {hash}</div>
      <div>isLoading: {isLoading ? "true": "false"}</div>
      <div>isSuccess: {isSuccess ? "true": "false"}</div>
    </div>

  );
};

export default memo(MintButton);