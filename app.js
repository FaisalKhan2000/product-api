import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/connectDB.js";
import errorHandler from "./middlewares/errorHandler.js";
import product from "./routes/product.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const PORT = process.env.PORT || 8888;

app.get("/api/health", (req, res) => {
  res.json({ message: "server is running smoothly" });
});

app.use("/api/product", product);

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`server running on port ${PORT}`);
});
