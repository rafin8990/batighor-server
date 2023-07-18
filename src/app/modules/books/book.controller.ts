import { Request, Response } from "express";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";

const createBook = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await BookService.createBook(data);
    res.status(200).json({
      success: true,
      message: "Book added SuccessFully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Cannot created book successfully",
    });
  }
};
const addComment = async (req: Request, res: Response) => {
  const id = req.params.id;
  const review = req.body;
  console.log(review);
  const result = await BookService.addComment(id, review);
  res.status(200).json({
    success: true,
    message: "Review Added SuccessFully",
    data: result,
  });
};

const getAllBook = async (req: Request, res: Response) => {
  const filters = pick(req.query, ["searchTerm", "title", "author", "genre"]);
  const paginationOptions = pick(req.query, [
    "page",
    "limit",
    "sortBy",
    "sortOrder",
  ]);
  const result = await BookService.getBooks(filters, paginationOptions);
  res.status(200).json({
    success: true,
    message: "Book Retrieved SuccessFully",
    meta: result.meta,
    data: result.data,
  });
};

const getSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);
  res.status(200).json({
    success: true,
    message: "Book Retrieved SuccessFully",
    data: result,
  });
};
const updateBooks = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BookService.updateBook(id, updatedData);
  res.status(200).json({
    success: true,
    message: "Book Retrieved SuccessFully",
    data: result,
  });
};

const deleteBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.deleteBook(id);
  res.status(200).json({
    success: true,
    message: "Book Deleted SuccessFully",
    data: result,
  });
};

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBooks,
  deleteBook,
  addComment,
};
