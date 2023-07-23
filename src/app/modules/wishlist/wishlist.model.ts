import { Model, Schema, model } from "mongoose";
import { IWishlist } from "./wishlist.interface";
type WishListModel = Model<IWishlist, object>;

const WishlistSchema = new Schema<IWishlist>(
  {
    data: {
      type: Object,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Wishlist = model<IWishlist, WishListModel>(
  "Wishlist",
  WishlistSchema
);
