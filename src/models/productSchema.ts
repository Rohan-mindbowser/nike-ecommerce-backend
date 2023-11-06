import { Schema, model, connect } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  images: string[];
  shoeType: string;
  price: number;
  gender: "male" | "female" | "kids";
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    shoeType: { type: String, required: true },
    price: { type: Number, required: true },
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female", "kids"],
    },
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
