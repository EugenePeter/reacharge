import { themeServices } from "../../services";
export const vacanciesResolvers = {
  Query: {
    getTheme: async (parent: any, args: any, context: any) => {
      const { host } = args;
      console.log("AARGS:", args);
      try {
        const themes = await themeServices.getThemes(host);
        console.log("THEMESSSS:", themes);
        return themes;
      } catch (e) {
        console.log("NO VACANCY FOUND", e);
        return e;
      }
    },
  },
  // Mutation: {
  //   addVacancy: async (_: any, args: any, context: any) => {
  //     const { params } = args;
  //     console.log("PARAMS:", context);
  //     try {
  //       const vacancies = Vacancies.build({
  //         ...params,
  //       });
  //       // await vacancies.save();
  //       const result = {
  //         message: `Succcessfully added ${vacancies.vacancy} to vacancies`,
  //         success: true,
  //         ...vacancies,
  //       };
  //       console.log("VACANCIES ss RESULTS", vacancies);
  //       return result;
  //     } catch (e) {
  //       console.log("MUTATION ERROR:", e);
  //     }
  //   },
  // },
};
