import mongoose from "mongoose";

export const buildSchema = (schema: Record<string, any>) =>
  new mongoose.Schema(schema);
