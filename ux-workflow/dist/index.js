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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const graph_1 = require("./graph");
// import indexRouter from "./routes";
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const PS = "JOn1KES4Ic3w3HoD";
// const {
//   CONNECTIONSTRING = "mongodb+srv://workableVacancies:200800462@cluster0.khdnm.mongodb.net/workable-vacancies?retryWrites=true&w=majority",
// } = process.env;
const CONNECTIONSTRING = "mongodb+srv://test-bff:JOn1KES4Ic3w3HoD@cluster0.khdnm.mongodb.net/reacharge-host?retryWrites=true&w=majority";
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    const corsOptions = {
        origin: "*",
        optionsSuccessStatus: 200,
        credentials: false,
    };
    app.use((0, cors_1.default)(corsOptions));
    app.use("/test", (req, res) => {
        console.log("YOOO WELCOME");
        res.json({
            status: "ok",
            message: "hello welcome",
        });
    });
    try {
        // @ts-ignore
        yield mongoose_1.default.connect(CONNECTIONSTRING);
        // const client = new MongoClient(CONNECTIONSTRING);
        // await client.connect;
        // client.db();
        console.log("CONNECTED TO MONGODB >> hello ");
        yield (0, graph_1.initializeApolloServer)(app);
        // app.listen(process.env.PORT, () => {
        //   console.log(`apps is running on PORT: ${process.env.PORT}`);
        // });
    }
    catch (e) {
        console.log("error:", e);
    }
});
startServer();
