import React, { FC } from "react";
import { Children } from "@/types";
import { Stack, Panel } from "@/components";
type ActionSlot = "top" | "right" | "bottom" | "left";
type Action = {
  [P in ActionSlot]?: React.ReactNode;
};

interface Props extends Children {
  actions: Array<Action>;
}

const ActionCreator: FC<Props & Action> = (props) => {
  const { top, right, bottom, left, actions } = props;

  const renderActions = () => (
    <>
      {actions.map((action, i) =>
        action ? (
          Object.values(action).map((value) => {
            return (
              <Panel className={`padding-t--base`} key={i}>
                {value}
              </Panel>
            );
          })
        ) : (
          <></>
        )
      )}
    </>
  );
  return <>{renderActions()}</>;
};

export default ActionCreator;
