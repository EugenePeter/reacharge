"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const members_1 = require("../members");
const themes_1 = require("../themes");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const defaultTypeDefs = (0, graphql_tag_1.default) `
  type Query {
    _empty: String
  }
`;
exports.typeDefs = [defaultTypeDefs, members_1.membersTableTypeDef, themes_1.themesTypeDef];
