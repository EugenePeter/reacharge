import mongoose from "mongoose";
export interface Attrs {}

interface Attachment {
  type: string;
  url: string;
}

interface Id {
  $oid: string;
}

// An interface that describes the properties
// that a Theme Documents has
export interface Document extends mongoose.Document {
  _id: Id;
  title: string;
  description: string;
  status: string;
  assignedTo: string[];
  attachments: Attachment[];
}

// An interface that describes the properties
// that a Theme Model has
export interface Model extends mongoose.Model<Document> {
  build(attrs: Attrs): Document;
}
