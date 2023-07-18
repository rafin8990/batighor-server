import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", BookController.createBook);
router.post("/addComment/:id", BookController.addComment);
router.get("/get-book", BookController.getAllBook);
router.get("/getSingle-book/:id", BookController.getSingleBook);
router.patch("/updateBook/:id", BookController.updateBooks);
router.delete("/deleteBook/:id", BookController.deleteBook);

export default router;
