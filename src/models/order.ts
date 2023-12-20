import mongoose from "mongoose";

const PasseprtoutSchema = new mongoose.Schema(
  {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    orderType: {
      type: String,
      required: true,
    },
    workName: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    base: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: false,
    },
    passepartouts: [PasseprtoutSchema],
    glass: {
      type: String,
      required: false,
    },
    back: {
      type: String,
      required: false,
    },
    client: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    fullPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
