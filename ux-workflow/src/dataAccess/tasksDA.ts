import { Tasks } from "../models";
import { ObjectId } from "mongodb";

export const findTaskByID = async (id: string) =>
  await Tasks.findOne({
    _id: new ObjectId(id),
  });

export const findAllTask = async () => await Tasks.find();
