"use client";

import { createContext } from "react";
export const BaseContext = createContext<any>({});

export const BaseProvider = ({ children, theme, device }: any) => {
  return (
    <BaseContext.Provider value={{ ...theme, device }}>
      {children}
    </BaseContext.Provider>
  );
};
