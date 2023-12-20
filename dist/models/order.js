"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PasseprtoutSchema = new mongoose_1.default.Schema({
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
}, { _id: false });
const OrderSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.Order = mongoose_1.default.model("Order", OrderSchema);
