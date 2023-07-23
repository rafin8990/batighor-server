import express from "express";
import { wishlistController } from "./wishlist.controller";

const router = express.Router();

router.post("/create-wishlist", wishlistController.createWishlist);

export default router;
