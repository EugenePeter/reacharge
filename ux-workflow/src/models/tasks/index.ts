import mongoose from "mongoose";
import { buildSchema } from "../schemaBuilder/";
import { taskSchema } from "./schema";
import { Attrs, Document, Model } from "./types";
const schema = buildSchema(taskSchema);

schema.statics.build = (attrs: Attrs) => {
  return new Tasks(attrs);
};

export const Tasks = mongoose.model<Document, Model>("Tasks", schema);
