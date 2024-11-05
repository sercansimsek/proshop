import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
// import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 8000;
connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.use("/api/products", productRoutes);

/* 
route for all products
app.get("/api/products", (req, res) => {
	res.json(products);
});

route for individual product
app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
}); */

app.listen(port, () => console.log(`server running on port ${port}`));
