import mongoose from "mongoose";
import { buildSchema } from "../schemaBuilder/";
import { membersSchema } from "./schema";
import { MembersAttrs, MembersDocument, MembersModel } from "./types";
const schema = buildSchema(membersSchema);

schema.statics.build = (attrs: MembersAttrs) => {
  return new Members(attrs);
};

export const Members = mongoose.model<MembersDocument, MembersModel>(
  "Members",
  schema
);
