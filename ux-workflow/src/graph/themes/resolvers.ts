import { themeServices } from "../../services";
export const themesResolvers = {
  Query: {
    getTheme: async (parent: any, args: any, context: any) => {
      const { host } = args;
      try {
        const themes = await themeServices.getThemes(host);
        return themes;
      } catch (e) {
        console.log("NO VACANCY FOUND", e);
        return e;
      }
    },
  },
};
