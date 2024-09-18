import { useAccount, useReadContract } from "wagmi";
import "./index.less";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MintButton from "../../components/MintButton";
import dst from "../../abi/tokens/DynamicSocialToken.json";
import { CONSTRACT_ADDRESS_LOCAL } from "../../constants";
import { create } from 'ipfs-http-client';


const SpacePage = () => {
    const { address } = useAccount();
    const {
        data,
        error,
        isPending
    } = useReadContract({
        address: CONSTRACT_ADDRESS_LOCAL,
        abi: dst.abi,
        functionName: "getDstData",
        args: [2],
    })

    console.log("@data", data, error);

    return (
        <div className="container">
            <div className="nft">
                <div className="level">
                    <div className="level_icon"></div>
                    <div className="level-text">Level:</div>
                    <div className="level-grade">5</div>
                </div>
            </div>
            {/* <ConnectButton />
            <div className="box">
                <div>isPending: {isPending? 'true': 'false'}</div>
                <div>data</div>
            </div>
            <MintButton /> */}

        </div>
    )
}
export default SpacePage
