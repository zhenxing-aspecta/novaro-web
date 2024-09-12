import NovButton from "../Basic/Button/NovButton.tsx";
import "./index.less"
import {Avatar} from "@web3uikit/core";

const CardItem = () => {
    return (
        <div className="card">
            <div className="card-info">
                <Avatar
                    isRounded
                    size={60}
                    theme="image"
                />
                <div className="user-info">
                    <div className="user-name">Jenny Wilson</div>
                    <div className="user-id">@Jenny Wilson</div>
                </div>
            </div>
            <NovButton text="Follow"/>
        </div>
    )
}
export default CardItem
