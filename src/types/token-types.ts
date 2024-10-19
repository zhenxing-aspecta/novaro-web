import { TUser } from "./user-types";

export type TNft = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  owner: string;
  price: number;
  createdAt: Date;
  creator: TUser;
};
