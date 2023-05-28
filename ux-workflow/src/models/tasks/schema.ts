export const taskSchema = {
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  title: {
    type: "String",
  },
  description: {
    type: "String",
  },
  status: {
    type: "String",
  },
  assignedTo: {
    type: ["String"],
  },
  attachments: {
    type: ["Mixed"],
  },
};
