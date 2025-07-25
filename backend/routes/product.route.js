import express from "express";
import {
  addProduct,
  listProducts,
  removeProducts,
  singleProduct,
} from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove",adminAuth,removeProducts);
productRouter.post("/single",adminAuth,singleProduct);
productRouter.get("/list",listProducts);

export default productRouter;
