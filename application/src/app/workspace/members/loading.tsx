"use client";
import Skeleton from "@/components/templates/skeleton";
import { Suspense } from "react";
export default function Loading() {
  return (
    <Suspense fallback={<>loading...</>}>
      <h1>MEMBERS PAGE LOADING</h1>
      <Skeleton />
    </Suspense>
  );
}
