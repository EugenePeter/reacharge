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
exports.table = exports.getMembersTable = void 0;
const dataAccess_1 = require("../dataAccess");
const getMembersTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const membersTable = yield dataAccess_1.membersDA.data();
    return membersTable;
});
exports.getMembersTable = getMembersTable;
const computeTaskCompletion = (tasks) => {
    const numOfTasks = tasks.length;
    const completedTasks = tasks.reduce((count, task) => (task.status === "completed" ? count + 1 : count), 0);
    return `${completedTasks}/${numOfTasks}`;
};
const table = () => __awaiter(void 0, void 0, void 0, function* () {
    const columns = yield dataAccess_1.membersDA.columns();
    const data = yield dataAccess_1.membersDA.data();
    function structureMemberTable(columns, rows) {
        const data = [];
        rows.forEach((row) => {
            const dataObj = {};
            Object.entries(row).forEach(([key, value]) => {
                const colIndex = columns.findIndex((col) => col.accessor === key);
                const colItem = columns === null || columns === void 0 ? void 0 : columns[colIndex];
                if (!colItem)
                    return;
                dataObj[colItem.accessor] = String(value);
                if (colItem.accessor === "tasks" &&
                    Array.isArray(value) &&
                    value.length) {
                    dataObj[colItem.accessor] = computeTaskCompletion(value);
                }
            });
            data.push(dataObj);
        });
        return { columns, data };
    }
    return structureMemberTable(columns, data);
});
exports.table = table;
