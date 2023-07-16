import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const data = req.body;
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

export const BookController = {
  createBook,
};
