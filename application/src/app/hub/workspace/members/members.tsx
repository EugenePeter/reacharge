"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import Grid from "@/components/molecules/table";
import { Panel } from "@/components";
interface Props {}

const Members: FC<Props> = (props) => {
  const path = usePathname();
  const [tabs, setTabs] = useState([
    {
      key: "111",
      component: <>Some component to render.</>,
      url: `${path}`,
      label: "Members",
      id: 112233,
    },
  ]);

  const handleClick = (m: any) => {
    setTabs((prev) => {
      const uniqueUser = tabs.some((t) => t.id === m.row.id);
      if (!uniqueUser) {
        return [
          ...prev,
          {
            key: m?.row?.id,
            id: m?.row?.id,
            component: <>Some component to render.</>,
            url: `${path}/${m?.row?.id}`,
            name: m.row.original.name,
            label: m.row.original.name,
          },
        ];
      }
      return prev;
    });
  };
  return (
    <>
      <Grid actions={{ addTab: handleClick }} />
    </>
  );
};

export default Members;
