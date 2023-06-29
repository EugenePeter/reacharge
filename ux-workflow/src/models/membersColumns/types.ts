import mongoose from "mongoose";
export interface ColumnsAttrs {}
export interface ColumnsDocs {
  header: string;
  accessorKey: string;
}
export interface Model<Attrs, Document> extends mongoose.Model<Document> {
  build(attrs: Attrs): Document;
}
