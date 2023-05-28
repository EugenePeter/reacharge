import { membersTableTypeDef } from "../members";
import { themesTypeDef } from "../themes";
import gql from "graphql-tag";
const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
`;
export const typeDefs = [defaultTypeDefs, membersTableTypeDef, themesTypeDef];
