import { useAccount, useReadContract } from "wagmi";
import "./index.less";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MintButton from "../../components/MintButton";
import dst from "../../abi/tokens/DynamicSocialToken.json";
import { CONSTRACT_ADDRESS_LOCAL } from "../../constants";
import { create } from 'ipfs-http-client';

import levelIconUrl from '@/assets/space-page/level-icon.png';
import rockIconUrl from '@/assets/space-page/rock-icon.png'


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
            <div className="content">
                {/* todo: search common components */}
                <div className="search"></div>
                <div className="nft">
                    <div className="progress"></div>
                    <div className="grade">
                        <img className="level-icon" src={levelIconUrl} />
                        <div className="level-text">Level 1</div>
                        <div className="gap-line" />
                        <img className="rock-icon" src={rockIconUrl} />
                        <div className="level-text">rock 18,000</div>
                    </div>
                    <div className="active-btn"></div>
                </div>
                <div className="data">
                    <div className="mint-value">
                        <div className="mint-text">Daily Social Mint</div>
                        <div className="mint-count">232</div>
                    </div>
                    <div className="statistics">
                        <div className="statistic-header">
                            <div className="header-text ">Social Mint Statistics</div>
                            <div className="header-text ">Date</div>
                        </div>
                    </div>
                </div>
                <div className="activity-record"></div>
            </div>
            <div className="profile">
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
