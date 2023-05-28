import { membersServices } from "../../services";
export const membersTableResolvers = {
  Query: {
    membersTable: async () => {
      try {
        const membersTable = await membersServices.table();
        console.log("MEMBERS TABLE:", membersTable.data[0]);
        return membersTable;
      } catch (e) {
        console.log("NO VACANCY FOUND", e);
        return e;
      }
    },
  },
};
