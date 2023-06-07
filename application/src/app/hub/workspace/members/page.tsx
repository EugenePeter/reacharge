import Link from "next/link";
// import { usePathname } from "next/navigation";
import React, {
  FC,
  // useState
} from "react";
// import { Table } from "@/components";
import Table from "@/components/molecules/table";
import Grid from "@/components/molecules/vanilla-table";
interface Props {
  // Add your prop types here
}

const Members: FC<Props> = (props) => {
  console.log(" IA AM MEMEBERSD PAGE");
  // const path = usePathname();
  // const [tabs, setTabs] = useState([
  //   {
  //     key: "111",
  //     component: <>Some component to render.</>,
  //     url: `${path}`,
  //     label: "Home",
  //     id: 112233,
  //   },
  // ]);

  // const members = [
  //   {
  //     key: "123",
  //     component: <>Some component to render.</>,
  //     url: `${path}/123`,
  //     name: "Eugene",
  //     id: 1234,
  //   },
  //   {
  //     key: "456",
  //     component: <>Some component to render.</>,
  //     url: `${path}/321`,
  //     name: "Jennifer",
  //     id: 5678,
  //   },
  //   {
  //     key: "456",
  //     component: <>Some component to render.</>,
  //     url: `${path}/321677`,
  //     name: "Peter",
  //     id: 567845,
  //   },
  // ];

  // const columns = [
  //   {
  //     Header: "Full Name",
  //     accessor: "fullName",
  //   },
  //   {
  //     Header: "Assigned Task",
  //     accessor: "assignedTask",
  //   },
  // ];

  const data = [{}];

  // const handleClick = (m: any) => {
  //   setTabs((prev) => {
  //     const uniqueUser = tabs.some((t) => t.id === m.id);
  //     if (!uniqueUser) {
  //       return [
  //         ...prev,
  //         {
  //           ...m,
  //           label: m.name,
  //         },
  //       ];
  //     }
  //     return prev;
  //   });
  // };
  return (
    <>
      <div style={{ display: "inline" }}>
        {/* {tabs.map((t) => (
          <Link key={t.id} href={t.url} style={{ marginRight: "4px" }}>
            {t.label}
          </Link>
        ))} */}

        <div
          style={{
            marginBottom: "2px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {/* {members.map((m) => (
            <div
              key={m.id}
              onClick={() => handleClick(m)}
              style={{ background: "#fff", marginBottom: "2px" }}
            >
              {m.name}
            </div>
          ))} */}
          {/* <Grid /> */}
          <Table />
        </div>
      </div>
    </>
  );
};

export default Members;
