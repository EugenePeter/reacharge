import { ObjectId } from "mongodb";
import { themeDA, membersDA, tasksDA } from "../dataAccess";
export const getThemes = async (host: string) => {
  const name = await themeDA.getHostID(host);
  if (!name?._id) {
    return;
  }

  const membersTable = await membersDA.data();
  const result = await themeDA.findThemeByHostID(new ObjectId(name._id));
  return result;
};
