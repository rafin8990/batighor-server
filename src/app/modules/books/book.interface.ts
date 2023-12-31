export type IComment = {
  email: string;
  review: string;
};
export type IBooks = {
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string;
  time: string;
  wishlist: boolean;
  reading: boolean;
  finished: boolean;
  review: IComment[];
};
