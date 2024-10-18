import CardItem from "./CardItem.tsx";
import { TUser } from "../../types/user-types.ts";
import { useState } from "react";

// mock data , you can replace it with your own data
// with null avatar
const users: TUser[] = [
  {
    id: 1,
    nickname: "John Doe",
    username: "johndoe",
    avatar: null,
  },
  {
    id: 2,
    nickname: "Jane Doe",
    username: "janedoe",
    avatar: null,
  },
  {
    id: 3,
    nickname: "John Smith",
    username: "johnsmith",
    avatar: null,
  },
  {
    id: 4,
    nickname: "Jane Smith",
    username: "janesmith",
    avatar: null,
  },
  {
    id: 5,
    nickname: "John Doe",
    username: "johndoe",
    avatar: null,
  },
  {
    id: 6,
    nickname: "Jane Doe",
    username: "janedoe",
    avatar: null,
  },
  {
    id: 7,
    nickname: "John Smith",
    username: "johnsmith",
    avatar: null,
  },
  {
    id: 8,
    nickname: "Jane Smith",
    username: "janesmith",
    avatar: null,
  },
  {
    id: 9,
    nickname: "John Doe",
    username: "johndoe",
    avatar: null,
  },
  {
    id: 10,
    nickname: "Jane Doe",
    username: "janedoe",
    avatar: null,
  },
  {
    id: 11,
    nickname: "John Smith",
    username: "johnsmith",
    avatar: null,
  },
  {
    id: 12,
    nickname: "Jane Smith",
    username: "janesmith",
    avatar: null,
  },
];

const SHOW_COUNT = 5;

const FollowList = () => {
  const [showMore, setShowMore] = useState(false);
  const showUsers = showMore ? users : users.slice(0, SHOW_COUNT);
  return (
    <div className="space-y-4 pl-4">
      <div className="text-xl mb-6 text-[#202226]">Suggested Follows</div>
      <div className="flex flex-col items-center space-y-4 p-4 rounded bg-[#F9F9FC]">
        {showUsers.map((user, index) => (
          <CardItem key={index} user={user} />
        ))}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center font-bold justify-center py-2 text-blue-500 rounded hover:text-blue-700"
        >
          {!showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default FollowList;
