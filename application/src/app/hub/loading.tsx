"use client";
import Spinner from "../../components/ui/spinner";
import Skeleton from "../../components/templates/skeleton";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      {/* <Spinner /> */}
      <Skeleton />
    </>
  );
}
