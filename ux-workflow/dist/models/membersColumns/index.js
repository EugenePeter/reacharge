"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaBuilder_1 = require("../schemaBuilder");
const schema_1 = require("./schema");
const schema = (0, schemaBuilder_1.buildSchema)(schema_1.membersTableSchema);
schema.statics.build = (attrs) => {
    return new exports.Columns(attrs);
};
exports.Columns = mongoose_1.default.model("Member-columns", schema);
