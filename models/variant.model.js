import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    color: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

export const Variant = mongoose.model("Variant", variantSchema);
