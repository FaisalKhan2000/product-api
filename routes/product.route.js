import express from "express";
import {
  addProduct,
  addProductVariant,
  addProductVariantSize,
  getAllProducts,
  getProduct,
  getProductVariants,
  getVariant,
  getVariantSize,
  getVariantSizes,
} from "../controllers/product.controller.js";

const router = express.Router();

// Route to get all products
router.get("/", getAllProducts);

// Route to get a specific product by ID
router.get("/:productId", getProduct);

// Route to get all variants
router.get("/variants/:productId", getProductVariants);

// Route to get a specific variant
router.get("/:productId/variant/:variantId", getVariant);

// Route to all variants sizes
router.get("/:productId/variants/:variantId", getVariantSizes);

// Route to get a specific variant size
router.get(
  "/:productId/variant/:variantId/variant-size/:variantSizeId",
  getVariantSize
);

// Route to add a new product
router.post("/", addProduct);

// Route to add a variant to a specific product
router.post("/color/:productId", addProductVariant);

// Route to add a variant size to a specific variant
router.post("/size/:variantId", addProductVariantSize);

export default router;
