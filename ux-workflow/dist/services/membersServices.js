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
    if (!tasks.length)
        return [];
    const numOfTasks = tasks.length;
    const completedTasks = tasks.reduce((count, task) => (task.status === "completed" ? count + 1 : count), 0);
    return [
        {
            done: completedTasks,
            total: numOfTasks,
        },
    ];
};
function structureMemberTable(columns, rows) {
    const data = rows.map((item) => {
        const filteredItem = {};
        columns.forEach((column) => {
            if (!item.hasOwnProperty(column.accessorKey))
                return;
            if (column.accessorKey !== "tasks")
                return (filteredItem[column.accessorKey] = item[column.accessorKey]);
            return (filteredItem[column.accessorKey] = computeTaskCompletion(item[column.accessorKey]));
        });
        return filteredItem;
    });
    return { columns, data };
}
const table = () => __awaiter(void 0, void 0, void 0, function* () {
    const columns = yield dataAccess_1.membersDA.columns();
    const data = yield dataAccess_1.membersDA.data();
    if (columns.length && data.length)
        return structureMemberTable(columns, data);
});
exports.table = table;
