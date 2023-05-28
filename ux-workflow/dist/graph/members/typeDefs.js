"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersTableTypeDef = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.membersTableTypeDef = (0, graphql_tag_1.default) `
  type Tasks {
    oid: String
  }
  type Address {
    value: String
  }
  type TrainingCompleted {
    value: String
  }
  type ReportsTo {
    value: String
  }
  type Joined {
    value: String
  }
  type Ratings {
    value: Float
  }
  type Email {
    value: String
  }
  type FullName {
    value: String
    custom: [String]
  }
  type Suburb {
    value: String
    id: String
  }
  type Country {
    value: String
  }
  type Custom {
    name: String
    icon: String
  }
  type State {
    value: String
    custom: [Custom]
  }
  type City {
    value: String
  }
  type LastName {
    value: String
    custom: [Custom]
  }
  type FirstName {
    value: String
  }
  type EmployeeId {
    value: String
  }
  type Id {
    oid: String
  }

  type Config {
    tasks: [Tasks]
    address: Address
    trainingCompleted: TrainingCompleted
    reportsTo: ReportsTo
    joined: Joined
    ratings: Ratings
    email: Email
    fullName: FullName
    suburb: Suburb
    country: Country
    state: State
    city: City
    lastName: LastName
    firstName: FirstName
    employeeId: EmployeeId
    _id: Id
  }

  type Data {
    fullName: String
    email: String
    ratings: String
    trainingCompleted: String
    tasks: String
  }

  type Columns {
    Header: String
    accessor: String
  }

  type MemberTable {
    columns: [Columns]
    data: [Data]
  }

  extend type Query {
    membersTable: MemberTable
  }
`;
