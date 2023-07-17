import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", BookController.createBook);
router.get("/get-book", BookController.getAllBook);
router.get("/getSingle-bookz/:id", BookController.getSingleBook);
router.patch("/updateBook/:id", BookController.updateBooks);
router.delete("/deleteBook/:id", BookController.deleteBook);
export default router;
