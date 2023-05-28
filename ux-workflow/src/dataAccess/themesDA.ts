import { Types } from "mongoose";
import { Theme, Name } from "../models";
import { ObjectId } from "mongodb";

export const getHostID = async (host: string) => {
  return await Name.findOne({
    URL: host,
  });
};

export const findThemeByHostID = async (hostID: any) =>
  await Theme.findOne({
    hostID,
  });
