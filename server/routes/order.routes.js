import express from "express";
import { orderData } from "../controllers/order.controllers.js";

const orderRouter = express.Router();

orderRouter.post("/", orderData);

export default orderRouter;
