import "./index.less";
import React, { useState } from 'react';
import novaroText from "../../assets/svg/novaroText.svg";
import NftList from "../../components/NftList";
import NovButton from "../../components/Basic/Button/NovButton.tsx";
import {Search} from "@web3uikit/icons";
import {Input} from "@web3uikit/core";
import NftDialog from "../../components/NftDialog";
const TokenPage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);
    return (
        <div className="token-container">
            <div className="token-top">
                <img src={novaroText}/>
                <div className="token-top-text">
                    Create Your Own Token, Attract More Followers
                </div>
                <NovButton text="Create Token" onClick={openDialog}
                           width="160px"/>
            </div>
            <div className="token-search">
                <div className="token-search-left">
                    <Input
                        style={{
                            height: "40px",
                            background: "#f7f7f7", // A2A5B1
                            outline: "none",
                        }}
                        placeholder="Search or type a command"
                        width="323px"
                        prefixIcon={<Search style={{ color: "#A2A5B1"}} />}
                        name="Test text Input"
                        onBlur={function noRefCheck(){}}
                        onChange={function noRefCheck(){}}
                    />
                </div>
                <div className="token-search-right">
                </div>
            </div>
            <div className="token-line"></div>
            <NftList/>
            <NftDialog isOpen={isDialogOpen} onClose={closeDialog}/>
        </div>
    )
}
export default TokenPage
