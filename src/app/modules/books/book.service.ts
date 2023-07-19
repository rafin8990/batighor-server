import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../helper/paginationHelper";
import { IBooks, IComment } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBooks): Promise<IBooks | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error("Failed to add books");
  }
  return createBook;
};
const addComment = async (id: string, payload: IComment) => {
  const result = await Book.findById(id);
  console.log(result);

  console.log(payload);
  result?.review.push(payload);
  // console.log(result);
  await result.save();
};

const getSingleBook = async (id: string): Promise<IBooks | null> => {
  const result = await Book.findById(id);
  return result;
};

const getCommnet = async (id: string): Promise<IBooks | null> => {
  const result = await Book.findById({ _id: id }, { review: 1 });
  return result;
};
type paginationOption = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

type IBookFilter = { searchTerm: string };
const getBooks = async (
  filters: IBookFilter,
  paginationOptions: paginationOption
): Promise<IGenericResponse<IBooks[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const BookSearchableField = ["title", "author", "genre", "publicationDate"];
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: BookSearchableField.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Book.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const updateBook = async (
  id: string,
  payload: Partial<IBooks>
): Promise<IBooks | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBooks | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  addComment,
  getCommnet,
};
