"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const buildSchema = (schema) => new mongoose_1.default.Schema(schema);
exports.buildSchema = buildSchema;
