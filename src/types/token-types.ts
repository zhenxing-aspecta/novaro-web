import { TUser } from "./user-types";

export type TNft = {
  id: string;
  name: string;
  des: string;
  imageUrl: string;
  price: number;
  createdAt: Date;
  creator: TUser;
  deployer:string;
};
