// "use client";
import React, { FC, useRef, useState } from "react";
import { createMachine, interpret, assign, State } from "xstate";
import { Children } from "@/types";
import Members from "./members";
import initializeState from "./intialize-state";

import { getClient, query } from "@/app/lib/client";
import { GET_MEMBERS_TABLE } from "@/utils/getMembersTable/gql";
interface Props {}

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
