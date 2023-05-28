import express from "express";
import dotenv from "dotenv";
import { initializeApolloServer } from "./graph";
import { MongoClient } from "mongodb";
// import indexRouter from "./routes";
import cors from "cors";

import mongoose from "mongoose";
dotenv.config();

const PS = "JOn1KES4Ic3w3HoD";
// const {
//   CONNECTIONSTRING = "mongodb+srv://workableVacancies:200800462@cluster0.khdnm.mongodb.net/workable-vacancies?retryWrites=true&w=majority",
// } = process.env;
const CONNECTIONSTRING =
  "mongodb+srv://test-bff:JOn1KES4Ic3w3HoD@cluster0.khdnm.mongodb.net/reacharge-host?retryWrites=true&w=majority";
const startServer = async () => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: false,
  };
  app.use(cors(corsOptions));

  app.use("/test", (req, res) => {
    console.log("YOOO WELCOME");
    res.json({
      status: "ok",
      message: "hello welcome",
    });
  });

  try {
    // @ts-ignore
    await mongoose.connect(CONNECTIONSTRING);
    // const client = new MongoClient(CONNECTIONSTRING);
    // await client.connect;
    // client.db();
    console.log("CONNECTED TO MONGODB >> hello ");
    await initializeApolloServer(app);
    // app.listen(process.env.PORT, () => {
    //   console.log(`apps is running on PORT: ${process.env.PORT}`);
    // });
  } catch (e) {
    console.log("error:", e);
  }
};

startServer();
