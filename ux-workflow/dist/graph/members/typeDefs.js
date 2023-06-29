"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersTableTypeDef = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.membersTableTypeDef = (0, graphql_tag_1.default) `
  type Tasks {
    done: Int
    total: Int
  }

  type Performance {
    indicator: String
    trend: String
    stars: Int
  }
  type Label {
    value: String
    color: String
  }

  type Data {
    fullName: String
    email: String
    ratings: String
    trainingCompleted: String
    joined: String
    dateJoined: String
    tasks: [Tasks]
    performance: [Performance]
    label: [Label]
  }

  type Columns {
    id: String
    header: String
    accessorKey: String
  }

  type MemberTable {
    columns: [Columns]
    data: [Data]
  }

  extend type Query {
    membersTable: MemberTable
  }
`;
