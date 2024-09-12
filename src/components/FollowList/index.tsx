import CardItem from "./CardItem.tsx";
import "./index.less"
import NovButton from "../Basic/Button/NovButton.tsx";

const FollowList = () => {
    return (
        <div className="card-list">
            <CardItem/>
            <NovButton text="Show More" width="120px" backgroundColor="#F9F9FC" textColor="#5B85F2"/>
        </div>
    )
}

export default FollowList
