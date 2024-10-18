import { TPost } from "../../types/post-types";
import { Icon } from "@iconify/react";
import { humanizeNumber } from "../../utils/utils";
// @ts-ignore
import { Avatar } from "@web3uikit/core";

export default function PostItem({ post }: { post: TPost }) {
  return (
    <div key={post.id} className="pt-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex-none flex  items-center space-x-3">
          <Avatar isRounded size={60} theme="image" image={post.avatar} />
          <div>
            <div className="text-gray-500 text-sm ml-2">{post.username}</div>
            <div className="text-gray-500 text-sm ml-2">{post.timestamp}</div>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded  text-sm">
          Follow
        </button>
      </div>
      <p className="mt-2 text-gray-900">{post.content}</p>
      <div className="flex items-center space-x-4 mt-4 text-gray-500 text-xs">
        <button className="flex items-center space-x-1">
          <Icon icon="mdi:comment-outline" className="size-4" />
          <span>{humanizeNumber(post.reply_count || 0)}</span>
        </button>
        <button className="flex items-center space-x-1">
          <Icon icon="mdi:repeat" className="size-4" />
          <span>{humanizeNumber(post.share_count || 0)}</span>
        </button>
        <button className="flex items-center space-x-1">
          <Icon icon="mdi:heart-outline" className="size-4" />
          <span>{humanizeNumber(post.like_count || 0)}</span>
        </button>
      </div>
    </div>
  );
}
