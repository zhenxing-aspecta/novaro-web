import { TPost } from "../../types/post-types";
import PostItem from "./PostItem";

function PostList() {
  const posts: TPost[] = [
    {
      id: 1,
      name: "Leo",
      username: "@leosmith",
      avatar: "",
      content:
        "Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing 🍊🍊🍊...",
      timestamp: "12 April at 09:28 PM",
      like_count: 23500,
      reply_count: 534,
      share_count: 1230,
    },
    {
      id: 2,
      name: "Leo",
      username: "@leosmith",
      avatar: "",
      content:
        "Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing 🍊🍊🍊...",
      timestamp: "12 April at 10:28 PM",
      like_count: 23500,
      reply_count: 534,
      share_count: 2383,
    },
  ];

  return (
    <div className="bg-white pt-4 space-y-6">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default PostList;
