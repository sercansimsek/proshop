import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// route for all products
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// route for individual product
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			return res.json(product);
		} else {
			res.status(404);
			throw new Error("Resource not found");
		}
	})
);

export default router;
