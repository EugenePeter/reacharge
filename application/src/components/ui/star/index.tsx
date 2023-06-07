import React, { FC } from "react";

interface Props {
  number: number;
}

const Star: FC<Props> = ({ number }) => {
  const stars = Array.from({ length: number }, (_, index) => (
    <span
      key={index}
      className="material-symbols-outlined material-symbols-outlined--color"
    >
      star
    </span>
  ));
  return <div>{stars}</div>;
};

export default Star;
