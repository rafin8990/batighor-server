import { IBooks } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBooks): Promise<IBooks | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error("Failed to add books");
  }
  return createBook;
};

export const BookService = {
  createBook,
};
