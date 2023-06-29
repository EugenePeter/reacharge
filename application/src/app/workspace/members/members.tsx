"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import Grid from "@/components/molecules/table";
import { Panel } from "@/components";
interface Props {
  data: any;
}

const Members: FC<Props> = (props) => {
  const { data } = props;
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
            name: m.row.original.fullName,
            label: m.row.original.fullName,
          },
        ];
      }
      return prev;
    });
  };
  return (
    <>
      <Panel className={`padding-t--base`}>
        {tabs.map((t) => (
          <Link key={t.id} href={t.url}>
            {t.label}
          </Link>
        ))}
      </Panel>
      <Grid actions={{ addTab: handleClick }} datas={data} />
    </>
  );
};

export default Members;
