import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "./base";
import http from "http";

import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const initializeApolloServer = async (app: any) => {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: "eugene peter maestrado" }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};
