import React, { FC, HTMLProps, useEffect, useRef } from "react";
interface Props {
  indeterminate: boolean;
  className?: string;
}

const IndeterminateCheckbox: FC<Props & HTMLProps<HTMLInputElement>> = (
  props
) => {
  const { indeterminate, className = "", ...rest } = props;
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
};

export default IndeterminateCheckbox;
