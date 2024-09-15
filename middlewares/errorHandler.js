import { ZodError } from "zod";
import AppError from "../utils/appError.js";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http.js";

const handleAppError = (res, error) => {
  return res
    .status(error.statusCode)
    .json({ success: false, message: error.message });
};

const handleZodError = (res, error) => {
  const errorMessages = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));

  return res
    .status(BAD_REQUEST)
    .json({ success: false, messages: errorMessages });
};

const errorHandler = async (error, req, res, next) => {
  // Log the error path and error object
  console.log(`Path ${req.path}`, error);

  if (error instanceof ZodError) {
    return handleZodError(res, error);
  }

  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  return res.status(INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorHandler;
