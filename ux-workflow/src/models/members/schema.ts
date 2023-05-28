export const membersSchema = {
  _id: {
    $oid: {
      type: "ObjectId",
    },
  },
  employeeId: {
    type: "Number",
  },
  firstName: {
    type: "String",
  },
  lastName: {
    type: "String",
  },
  city: {
    type: "String",
  },
  state: {
    type: "Mixed",
  },
  country: {
    type: "String",
  },
  suburb: {
    type: "String",
  },
  fullName: {
    type: "String",
  },
  email: {
    type: "String",
  },
  tasks: {
    type: ["Mixed"],
  },
  ratings: {
    type: "Number",
  },
  joined: {
    type: "Date",
  },
  reportsTo: {
    type: "String",
  },
  trainingCompleted: {
    type: "String",
  },
  address: {
    type: "String",
  },
};
export const membersTableSchema = {
  Header: {
    type: "String",
  },
  accessor: {
    type: "String",
  },
};
