import mongoose from "mongoose";
import { buildSchema } from "../schemaBuilder";
import { membersTableSchema } from "./schema";
import { ColumnsAttrs, ColumnsDocs, Model } from "./types";

const schema = buildSchema(membersTableSchema);
schema.statics.build = (attrs: ColumnsAttrs) => {
  return new Columns(attrs);
};

export const Columns = mongoose.model<
  ColumnsDocs,
  Model<ColumnsAttrs, ColumnsDocs>
>("Member-columns", schema);
