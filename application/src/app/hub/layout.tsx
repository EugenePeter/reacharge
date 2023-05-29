"use client";
import { useContext } from "react";
import { BaseContext } from "../../context/BaseProvider";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Dashboard";
export default function HubLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const theme = useContext(BaseContext);
  return (
    <ThemeProvider theme={theme ?? {}}>
      <Dashboard>{children}</Dashboard>
    </ThemeProvider>
  );
}
