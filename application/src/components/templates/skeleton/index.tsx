import React, { FC } from "react";
import styled from "styled-components";
import "./styles.css";
interface Props {
  // Add your prop types here
}

const Skeleton: FC<Props> = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, index) => (
        <div className="skeleton-row" key={index}></div>
      ))}
    </>
  );
};

export default Skeleton;

const SkeletonRow = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: red;
  background: rgb(224, 224, 224);
  background: linear-gradient(
    90deg,
    rgba(224, 224, 224, 0.5914740896358543) 0%,
    rgba(238, 238, 238, 0.40940126050420167) 100%
  );
`;
