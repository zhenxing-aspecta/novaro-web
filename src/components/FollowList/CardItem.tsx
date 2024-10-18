import NovButton from "../Basic/Button/NovButton.tsx";
// @ts-ignore
import { Avatar } from "@web3uikit/core";
import { TUser } from "../../types/user-types.ts";
import { useState } from "react";

const FollowUserCard = ({ user }: { user: TUser }) => {
  const [following, setFollowing] = useState(false);
  return (
    <div className="flex justify-between items-center w-[360px] h-[108px] px-3 bg-white  rounded-lg">
      <div className="flex items-center gap-2">
        <Avatar isRounded size={60} theme="image" image={user.avatar} />
        <div className="space-y-2">
          <div className="font-bold">{user.nickname}</div>
          <div className="text-[#BFBFCA] text-sm">@{user.username}</div>
        </div>
      </div>
      {following ? (
        <div
          className="flex-none w-[87px] h-10 flex items-center justify-center bg-[#eee] text-[#111] rounded"
          onClick={() => {
            setFollowing(false);
          }}
        >
          Following
        </div>
      ) : (
        <NovButton
          text="Follow"
          onClick={() => {
            setFollowing(true);
          }}
        />
      )}
    </div>
  );
};
export default FollowUserCard;
