import React, { FC } from "react";
import { Children } from "@/types";
import { GraphIcon, Indicator, Stars } from "@/components/ui";

interface Props extends Children {
  value: any;
}

const TablePerformance: FC<Props> = (props) => {
  const { value } = props;

  return value?.map((m, i) => (
    <div className="performance-container" key={i}>
      <Indicator color={m.indicator} />
      <GraphIcon classNames="color--lighter" data={m.trend} />
      <Stars number={m.stars} />
    </div>
  ));
};

export default TablePerformance;
