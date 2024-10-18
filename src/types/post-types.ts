export type TPost = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  like_count?: number;
  reply_count?: number;
  share_count?: number;
};
