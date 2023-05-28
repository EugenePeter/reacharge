import mongoose from "mongoose";
export interface ColumnsAttrs {}
export interface ColumnsDocs {
  Header: string;
  accessor: string;
}
export interface Model<Attrs, Document> extends mongoose.Model<Document> {
  build(attrs: Attrs): Document;
}
