import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    sub_category: { type: String },
    gender: { type: String },
    taglines: [String],
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
