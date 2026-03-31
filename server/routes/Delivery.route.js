import express from "express";
import { createDelivery, getDeliveries } from "../controllers/Delivery.controller.js";

const deliveryRouter = express.Router();

deliveryRouter.get("/getDeliveries", getDeliveries);
deliveryRouter.post("/createDelivery", createDelivery);

export default deliveryRouter;