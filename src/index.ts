import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Order } from "./models/order";

dotenv.config();

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/orders";
const port = process.env.PORT || 3001;
const app: Express = express();

app.use(express.json());

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("fotoramki-orders API");
});

app.get("/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allPatients = await Order.find();
    res.status(200).json(allPatients);
  } catch (error) {
    next(error);
  }
});

app.post("/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newOrder = new Order({
      ...req.body,
      status: "Принят",
      fullPrice: req.body.price,
    });
    const insertedOrder = await newOrder.save();
    res.status(201).json(insertedOrder);
  } catch (error) {
    next(error);
  }
});

app.delete(
  "/orders/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const deletedOrder = await Order.findByIdAndDelete(id);
      res.status(200).json(deletedOrder);
    } catch (error) {
      next(error);
    }
  }
);

const start = async () => {
  try {
    await mongoose.connect(databaseUrl);
    app.listen(process.env.PORT, () =>
      console.log("Server started on port 3001")
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
