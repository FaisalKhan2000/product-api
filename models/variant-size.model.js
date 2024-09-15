import mongoose from "mongoose";

const variantSizeSchema = new mongoose.Schema(
  {
    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variant",
      required: true,
    },
    size: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  }
);

export const VariantSize = mongoose.model("VariantSize", variantSizeSchema);
