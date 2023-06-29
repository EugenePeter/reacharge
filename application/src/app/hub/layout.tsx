"use client";
import { useContext } from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { BaseContext } from "../../context/BaseProvider";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header, Footer, SideBar, CenterStage, Container } from "@/components";
import Image from "next/image";
import { ThemeType } from "@/design-system/types";
export default function HubLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const theme = useContext(BaseContext);
  const currentPath = useSelectedLayoutSegment();

  const branding = {
    enabled: true,
    URL: "https://img.logoipsum.com/296.svg",
    name: "hello",
  };
  const renderBranding = () => {
    return (
      <Image
        src={`${branding.URL}`}
        width={36}
        height={36}
        alt="Picture of the author"
      />
    );
  };

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 200,
  'GRAD' 0,
  'opsz' 20
}
`;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ?? {}}>
        <Header>
          <nav>
            <Link href="/"> {renderBranding()}</Link>
            <Link href={`/hub/${currentPath}/teams`}>Teams</Link>
            <Link href={`/hub/${currentPath}/members`}>Members</Link>
            <Link href={`/hub/${currentPath}/clients`}>Clients</Link>
            {/* <Link href={`/hub/${currentPath}/tasks`}>Tasks</Link>
          <Link href={`/hub/${currentPath}/request`}>Requests</Link> */}
          </nav>
        </Header>
        <Container>
          <SideBar>
            <h1>LEFT NAV</h1>
            <Link href={`/hub/workspace`}>Workspace</Link>
            {/* <Link href={`/hub/analytics`}>Analytics</Link>
          <Link href={`/hub/rules`}>Rules</Link>
          <Link href={`/hub/triggers`}>Triggers</Link> */}
          </SideBar>
          <CenterStage>{children}</CenterStage>
          <SideBar>
            {["eugene", "peter", "maestrado"].map((a, i) => (
              <li key={i}>{a}</li>
            ))}
            <h1>RIGHT NAV</h1>
            The third column, with more content than before!
            asdffasdasfafasdfadfsdfdsafdddddeeeeeeeee
          </SideBar>
        </Container>
        <Footer>Design and Developed By Eugene D Maestrado</Footer>
      </ThemeProvider>
    </>
  );
}
