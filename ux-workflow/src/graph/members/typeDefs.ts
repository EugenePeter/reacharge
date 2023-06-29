import gql from "graphql-tag";
export const membersTableTypeDef = gql`
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
