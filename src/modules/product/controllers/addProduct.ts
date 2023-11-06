import { NextFunction, Request, Response } from "express";
import { Product, IProduct } from "../../../models/productSchema";

export const addProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doc = await Product.create(req?.body);
    await doc.save();
    res
      .status(200)
      .json({ message: "Record inserted successfully", success: true });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message || "Internal server error",
      success: false,
    });
  }
};
