import { Model, Schema, model } from "mongoose";
import { IBooks } from "./book.interface";
type BookModel = Model<IBooks, object>;
const bookSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    wishlist: {
      type: Boolean,
      required: true,
    },
    reading: {
      type: Boolean,
      required: true,
    },
    finished: {
      type: Boolean,
      required: true,
    },
    review: [
      {
        email: { type: String, required: true },
        review: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBooks, BookModel>("Book", bookSchema);
