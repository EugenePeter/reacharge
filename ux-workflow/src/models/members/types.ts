import mongoose from "mongoose";
export interface MembersAttrs {}

interface Id {
  $oid: string;
}

// An interface that describes the properties
// that a Theme Documents has
export interface MembersDocument extends mongoose.Document {
  _id: Id;
  employeeId: number;
  firstName: string;
  lastName: string;
  city: string;
  state?: any;
  country: string;
  suburb: string;
  fullName: string;
  email: string;
  tasks: Id[];
  ratings: number;
  joined: string;
  reportsTo: string;
  trainingCompleted: string;
  address: string;
}

// An interface that describes the properties
// that a Theme Model has
export interface MembersModel extends mongoose.Model<MembersDocument> {
  build(attrs: MembersAttrs): MembersDocument;
}
