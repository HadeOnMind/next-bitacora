import mongoose from "mongoose";

const sktbkschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "sketchbooks" }
);

export const sktbk = mongoose.model("sktbk", sktbkschema)