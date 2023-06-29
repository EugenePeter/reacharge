"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const params = [
    {
        employeeId: 2011890402,
        firstName: "Tuckie",
        lastName: "Sywell",
        city: "Khiliomódhi",
        country: "Greece",
        suburb: "Pasadena",
        fullName: "Tuckie Sywell",
        email: "tsywell2@phpbb.com",
        label: [
            { value: "agency", color: "warning" },
            { value: "agency", color: "warning" },
        ],
    },
];
const testFunc = (params) => {
    const dataO = Object.assign(Object.assign({}, params[0]), { employeeId: 2011890402, firstName: "Tuckie", lastName: "Sywell", city: "Khiliomódhi", country: "Greece", suburb: "Pasadena", fullName: "Tuckie Sywell", email: "tsywell2@phpbb.com", label: [
            { value: "agency", color: "warning" },
            { value: "agency", color: "warning" },
        ] });
    return params;
};
testFunc(params);
