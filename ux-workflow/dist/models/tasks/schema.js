"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
exports.taskSchema = {
    _id: {
        $oid: {
            type: "ObjectId",
        },
    },
    title: {
        type: "String",
    },
    description: {
        type: "String",
    },
    status: {
        type: "String",
    },
    assignedTo: {
        type: ["String"],
    },
    attachments: {
        type: ["Mixed"],
    },
};
