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
exports.themesResolvers = void 0;
const services_1 = require("../../services");
exports.themesResolvers = {
    Query: {
        getTheme: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const { host } = args;
            // console.log("AARGS:", args);
            try {
                const themes = yield services_1.themeServices.getThemes(host);
                console.log("THEMESSSS:", themes);
                return themes;
            }
            catch (e) {
                console.log("NO VACANCY FOUND", e);
                return e;
            }
        }),
        // getUXConfig: async () => {
        //   try {
        //     const membersTable = await membersServices.getMembersTable();
        //     return membersTable;
        //   } catch (e) {
        //     console.log("NO VACANCY FOUND", e);
        //     return e;
        //   }
        // },
    },
};
