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
exports.initializeApolloServer = void 0;
const server_1 = require("@apollo/server");
const base_1 = require("./base");
const http_1 = __importDefault(require("http"));
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const schema_1 = require("@graphql-tools/schema");
const initializeApolloServer = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        schema: (0, schema_1.makeExecutableSchema)({
            typeDefs: base_1.typeDefs,
            resolvers: base_1.resolvers,
        }),
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    yield server.start();
    app.use("/", (0, cors_1.default)(), body_parser_1.default.json(), 
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    (0, express4_1.expressMiddleware)(server, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () { return ({ token: "eugene peter maestrado" }); }),
    }));
    yield new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
});
exports.initializeApolloServer = initializeApolloServer;
