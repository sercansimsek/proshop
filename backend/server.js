import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import products from "./data/products.js";

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

// route for all products
app.get("/api/products", (req, res) => {
	res.json(products);
});

// route for individual product
app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(port, () => console.log(`server running on port ${port}`));
