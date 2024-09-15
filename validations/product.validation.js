import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().optional(),
  category: z.string().min(1, { message: "Category is required" }),
  sub_category: z.string().optional(),
  gender: z.enum(["male", "female", "unisex"]).optional(),
  taglines: z.array(z.string()).optional().default([]), // Defaults to an empty array if not provided
});

export const variantSchema = z.object({
  color: z.string().min(1, "Color is required"),
  images: z
    .array(z.string().min(1, "Image URL is required"))
    .min(1, "At least one image is required"),
});

export const variantSizeSchema = z.object({
  size: z.string().min(1, "size is required"),
  stock: z.number().int().nonnegative(),
});
