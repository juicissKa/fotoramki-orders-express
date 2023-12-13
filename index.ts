import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const accessory_model = require("./src/models/accessoryModel");

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("fotoramki-orders-api");
});

app.get("/accessories/", (req: Request, res: Response) => {
  accessory_model.getAccessories(req).then((ans: any) => res.send(ans));
});

app.get("/accessories/:id", (req: Request, res: Response) => {
  res.send("accessory" + req.params.id);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
