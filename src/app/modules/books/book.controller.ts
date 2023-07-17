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

const getAllBook = async (req: Request, res: Response) => {
  const filters = pick(req.query, ["searchTerm"]);
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

export const BookController = {
  createBook,
  getAllBook,
};
