"use client";
import React, { FC } from "react";
import { Children } from "@/types";
import { Pill } from "@/components/ui";

interface Props extends Children {
  value: any;
}

const TableLabels: FC<Props> = (props) => {
  const { value } = props;
  return (
    <>
      <div className="custom-row-container">
        {value?.length &&
          value?.map((v, i) => (
            <Pill key={i} color={v.color}>
              <>{v.value}</>
            </Pill>
          ))}
      </div>
    </>
  );
};

export default TableLabels;
