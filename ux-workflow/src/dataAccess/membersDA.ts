import { Members, Columns } from "../models";
import { ObjectId } from "mongodb";

export const findMembersByID = async (id: string) =>
  await Members.findOne({
    _id: new ObjectId(id),
  });

export const findAllMembers = async () => await Members.find();

export const data = async () => {
  return await Members.aggregate([
    // {
    //   $match: {
    //     _id: new ObjectId(id),
    //   },
    // },
    {
      $lookup: {
        from: "tasks",
        localField: "tasks",
        foreignField: "_id",
        as: "tasks",
      },
    },
  ]);
};

export const columns = async () => {
  return await Columns.find();
};
