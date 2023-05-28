"use server";
import { getClient } from "./lib/client";
import { GET_THEME } from "../utils/getHostThemes/gql";
export const getThenes = async (host: string) => {
  const { data } = await getClient().query({
    query: GET_THEME,
    variables: {
      host: "localhost:3000",
    },
  });
  return data;
};
