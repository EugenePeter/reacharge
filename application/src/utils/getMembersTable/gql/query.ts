import { gql } from "@apollo/client";

export const GET_MEMBERS_TABLE = gql`
  query membersTable {
    results: membersTable {
      columns {
        header
        accessorKey
      }
      data {
        fullName
        label {
          value
          color
        }
        tasks {
          done
          total
        }
        dateJoined
        performance {
          indicator
          trend
          stars
        }
      }
    }
  }
`;
