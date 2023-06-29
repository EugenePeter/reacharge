"use client";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface Props {
  // Add your prop types here
}

const SomeMembers: FC<Props> = (props) => {
  const params = useParams();
  console.log("PARAMS:", params);
  return <>{/* <h1>MEMBER ID : {params}</h1> */}</>;
};

export default SomeMembers;
