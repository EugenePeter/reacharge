// "use client";
import React from "react";
import Members from "./members";

import { query } from "@/app/lib/client";
import { GET_MEMBERS_TABLE } from "@/utils/getMembersTable/gql";
interface Props {}
export const revalidate = 10; // revalidate this page every 60 seconds
const MembersPage = async () => {
  const { data, ...rest } = await query({
    query: GET_MEMBERS_TABLE,
    variables: {
      DATA: "EUGENE MAESTRADO",
      // host: "localhost:3000",
    },
  });
  return <Members data={{ ...data.results, ...rest }} />;
};

export default MembersPage;
