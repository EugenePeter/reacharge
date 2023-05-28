"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const members_1 = require("../members");
const themes_1 = require("../themes");
exports.resolvers = [members_1.membersTableResolvers, themes_1.themesResolvers];
