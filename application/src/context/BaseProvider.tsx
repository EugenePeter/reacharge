"use client";

import { createContext } from "react";
export const BaseContext = createContext<any>({});

export const BaseProvider = ({ children, theme }: any) => {
  return (
    <BaseContext.Provider value={{ email: "@@@@@@@@@@@@@@eugene", theme }}>
      {children}
    </BaseContext.Provider>
  );
};
