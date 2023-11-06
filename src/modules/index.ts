import express from "express";
import { productRoutes } from "./product/routes/index";

export const routes = express.Router();

routes.use(productRoutes);
