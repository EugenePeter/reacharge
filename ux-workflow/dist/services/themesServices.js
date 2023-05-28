"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemes = void 0;
const mongodb_1 = require("mongodb");
const dataAccess_1 = require("../dataAccess");
const getThemes = (host) => __awaiter(void 0, void 0, void 0, function* () {
    const name = yield dataAccess_1.themeDA.getHostID(host);
    if (!(name === null || name === void 0 ? void 0 : name._id)) {
        return;
    }
    const membersTable = yield dataAccess_1.membersDA.data();
    const result = yield dataAccess_1.themeDA.findThemeByHostID(new mongodb_1.ObjectId(name._id));
    return result;
});
exports.getThemes = getThemes;
