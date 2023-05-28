import mongoose from "mongoose";
export interface Model<Attrs, Document> extends mongoose.Model<Document> {
  build(attrs: Attrs): Document;
}
