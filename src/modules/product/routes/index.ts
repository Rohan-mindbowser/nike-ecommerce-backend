import { Router } from "express";
import { addProductController } from "../controllers/addProduct";

export const productRoutes = Router();

productRoutes.post("/add-product", addProductController);
