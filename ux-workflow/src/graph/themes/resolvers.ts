import { themeServices } from "../../services";
export const themesResolvers = {
  Query: {
    getTheme: async (parent: any, args: any, context: any) => {
      const { host } = args;
      // console.log("AARGS:", args);
      try {
        const themes = await themeServices.getThemes(host);
        console.log("THEMESSSS:", themes);
        return themes;
      } catch (e) {
        console.log("NO VACANCY FOUND", e);
        return e;
      }
    },
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
