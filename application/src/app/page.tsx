"use client";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { BaseContext } from "../context/BaseProvider";
import Link from "next/link";

export default function Home() {
  const theme = useContext(BaseContext);
  return (
    <ThemeProvider theme={theme ?? {}}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={`/workspace`}>Go to workspace</Link>
      </main>
    </ThemeProvider>
  );
}
