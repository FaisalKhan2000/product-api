import { BAD_REQUEST, CREATED, OK } from "../constants/http.js";
import { Product } from "../models/product.model.js";
import { VariantSize } from "../models/variant-size.model.js";
import { Variant } from "../models/variant.model.js";
import AppError from "../utils/appError.js";
import catchErrors from "../utils/catchErrors.js";
import {
  productSchema,
  variantSchema,
  variantSizeSchema,
} from "../validations/product.validation.js";

export const getAllProducts = catchErrors(async (req, res, next) => {
  const products = await Product.find({});

  res.status(OK).json({
    success: true,
    products,
  });
});

export const getProduct = catchErrors(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  res.status(OK).json({ success: true, product });
});

export const getProductVariants = catchErrors(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  const variants = await Variant.find({ productId }).lean();

  res.status(OK).json({ success: true, variants });
});

export const getVariant = catchErrors(async (req, res, next) => {
  const { productId, variantId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  const variant = await Variant.findById(variantId);

  if (!variant) {
    throw new AppError(
      BAD_REQUEST,
      `No Variant with variantId: ${variantId} exists with productId: ${productId}`
    );
  }

  res.status(OK).json({ success: true, variant });
});

export const getVariantSizes = catchErrors(async (req, res, next) => {
  const { productId, variantId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  const variant = await Variant.findById(variantId);

  if (!variant) {
    throw new AppError(
      BAD_REQUEST,
      `No Variant with variantId: ${variantId} exists with productId: ${productId}`
    );
  }

  const variantSizes = await VariantSize.find({ variantId }).lean();

  res.status(OK).json({ success: true, variantSizes });
});

export const getVariantSize = catchErrors(async (req, res, next) => {
  const { productId, variantId, variantSizeId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  const variant = await Variant.findById(variantId);

  if (!variant) {
    throw new AppError(
      BAD_REQUEST,
      `No Variant with variantId: ${variantId} exists with productId: ${productId}`
    );
  }

  const variantSize = await VariantSize.findById(variantSizeId);

  if (!variantSize) {
    throw new AppError(
      BAD_REQUEST,
      `No Variant Size with variantSizeId: ${variantSizeId} exist in Variant with variantId: ${variantId} and productId: ${productId}`
    );
  }

  res.status(OK).json({ success: true, variantSize });
});

// add product
export const addProduct = catchErrors(async (req, res, next) => {
  const data = productSchema.parse(req.body);

  const products = await Product.create(data);

  res.status(CREATED).json({
    success: true,
    products,
  });
});

// add variant
export const addProductVariant = catchErrors(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError(
      BAD_REQUEST,
      `No product exists with productId: ${productId}`
    );
  }

  const data = variantSchema.parse(req.body);

  const variant = await Variant.create({ ...data, productId });

  res.status(CREATED).json({
    success: true,
    variant,
  });
});

// add variant size
export const addProductVariantSize = catchErrors(async (req, res, next) => {
  const { variantId } = req.params;

  const variant = await Variant.findById(variantId);
  if (!variant) {
    throw new AppError(
      BAD_REQUEST,
      `No variant exists with variantId: ${variantId}`
    );
  }

  const data = variantSizeSchema.parse(req.body);

  const variantSize = await VariantSize.create({ ...data, variantId });

  res.status(CREATED).json({
    success: true,
    variantSize,
  });
});
