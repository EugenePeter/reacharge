import React, { FC, useRef } from "react";
import { createMachine, interpret, assign, State } from "xstate";
import { Children } from "@/types";

interface Props {
  stateMachine: any;
  dummmyMachine: any;
  dummyActions: any;
}

const initializeState = (props: Props) => {
  const { stateMachine, dummmyMachine, dummyActions } = props;

  const machine = createMachine(dummmyMachine, dummyActions);
  let actor = null;
  if (!actor) {
    console.log("HEEEY I AM NULL");
    actor = interpret(machine).start();
  }
  //   const machineRef = useRef(null);
  //   if (!machineRef.current) {
  //     machineRef.current = interpret(machine).start();
  //   }
  return actor;
};

export default initializeState;
