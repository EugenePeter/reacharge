"use client";
import React, { FC } from "react";
interface Props {
  promise: any;
}
{
  /* @ts-expect-error Async Server Component */
}
const TryLang = async ({ promise }: Props) => {
  console.log("WHERE I AM RENDERING");
  const photosData = await promise;
  return (
    <div>
      <h1>PHOTOS</h1>
      <p>{photosData[0].title}</p>
    </div>
  );
};

export default TryLang;
