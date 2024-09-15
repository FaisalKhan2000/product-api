# Product API

This document provides information on the API endpoints for managing products.

## Base URL

```
http://localhost:8888/api
```

## Endpoints

### Get All Products

- **Endpoint:** `/product`
- **Method:** `GET`
- **Description:** Retrieves a list of all products.
- **Response:**

  ```json
  [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "category": "string",
      "sub_category": "string",
      "gender": "string",
      "taglines": ["string"]
    }
  ]
  ```

### Get Single Product

- **Endpoint:** `/product/{productId}`
- **Method:** `GET`
- **Description:** Retrieves details of a single product by ID.
- **Parameters:**
  - `productId` (path parameter): The ID of the product.
- **Response:**

  ```json
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "category": "string",
    "sub_category": "string",
    "gender": "string",
    "taglines": ["string"]
  }
  ```

### Get All Variants of a Product

- **Endpoint:** `/product/{productId}/variants`
- **Method:** `GET`
- **Description:** Retrieves all variants for a given product by ID.
- **Parameters:**
  - `productId` (path parameter): The ID of the product.
- **Response:**

  ```json
  [
    {
      "variantId": "string",
      "color": "string",
      "images": ["string"]
    }
  ]
  ```

### Get Single Variant of a Product

- **Endpoint:** `/product/{productId}/variant/{variantId}`
- **Method:** `GET`
- **Description:** Retrieves a specific variant of a product by its ID.
- **Parameters:**
  - `productId` (path parameter): The ID of the product.
  - `variantId` (path parameter): The ID of the variant.
- **Response:**

  ```json
  {
    "variantId": "string",
    "color": "string",
    "images": ["string"]
  }
  ```

### Get Sizes for a Single Variant

- **Endpoint:** `/product/{productId}/variant/{variantId}/sizes`
- **Method:** `GET`
- **Description:** Retrieves all sizes available for a specific variant of a product.
- **Parameters:**
  - `productId` (path parameter): The ID of the product.
  - `variantId` (path parameter): The ID of the variant.
- **Response:**

  ```json
  [
    {
      "sizeId": "string",
      "size": "string",
      "stock": "number"
    }
  ]
  ```

### Get Single Variant Size

- **Endpoint:** `/product/{productId}/variant/{variantId}/size/{sizeId}`
- **Method:** `GET`
- **Description:** Retrieves details of a specific size for a variant.
- **Parameters:**
  - `productId` (path parameter): The ID of the product.
  - `variantId` (path parameter): The ID of the variant.
  - `sizeId` (path parameter): The ID of the size.
- **Response:**

  ```json
  {
    "sizeId": "string",
    "size": "string",
    "stock": "number"
  }
  ```

### Add Product

- **Endpoint:** `/product`
- **Method:** `POST`
- **Description:** Adds a new product.
- **Request Body:**

  ```json
  {
    "name": "string",
    "description": "string",
    "category": "string",
    "sub_category": "string",
    "gender": "string",
    "taglines": ["string"]
  }
  ```

- **Response:**

  ```json
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "category": "string",
    "sub_category": "string",
    "gender": "string",
    "taglines": ["string"]
  }
  ```

### Add Product Variant

- **Endpoint:** `/product/color`
- **Method:** `POST`
- **Description:** Adds a new variant (color) to a product.
- **Request Body:**

  ```json
  {
    "color": "string",
    "images": ["string"]
  }
  ```

- **Response:**

  ```json
  {
    "variantId": "string",
    "color": "string",
    "images": ["string"]
  }
  ```

### Add Product Variant Size

- **Endpoint:** `/product/size/{variantId}`
- **Method:** `POST`
- **Description:** Adds a new size to a product variant.
- **Parameters:**
  - `variantId` (path parameter): The ID of the variant.
- **Request Body:**

  ```json
  {
    "size": "string",
    "stock": "number"
  }
  ```

- **Response:**

  ```json
  {
    "sizeId": "string",
    "size": "string",
    "stock": "number"
  }
  ```

### Check Health

- **Endpoint:** `/health`
- **Method:** `GET`
- **Description:** Checks the health of the API.
- **Response:**

  ```json
  {
    "status": "ok"
  }
  ```

## Error Codes

- `400 Bad Request`: Invalid input.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server error.
