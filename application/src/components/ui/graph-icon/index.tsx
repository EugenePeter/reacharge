import React, { FC } from "react";

interface Props {
  data: any;
  classNames?: string;
}

const Graph: FC<Props> = (props) => {
  const { data, classNames } = props;
  const trend = data === "upwards" ? "trending_up" : "trending_down";
  const className = `material-symbols-outlined`;
  return (
    <>
      <span className={`${className} ${className}__${classNames}`}>
        {trend}
      </span>
    </>
  );
};

export default Graph;
