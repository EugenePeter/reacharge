"use client";
import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { BaseContext } from "../../context/BaseProvider";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  Header,
  Footer,
  SideBar,
  CenterStage,
  Container,
  Wrapper,
  Drawer,
} from "@/components";
import Image from "next/image";
import { Nav } from "@/components";
export default function WorkspaceLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const theme = useContext(BaseContext);
  const currentPath = useSelectedLayoutSegment();
  console.log("THE CURRENT PATH:", currentPath);
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

  const links = [
    { href: `/workspace/teams`, name: "teams" },
    { href: `/workspace/members`, name: "members" },
    { href: `/workspace/clients`, name: "clients" },
  ];

  console.log("THE THEME:", theme);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ?? {}}>
        <Header>
          <Wrapper
            justify="flex-start"
            direction="row"
            layout={{
              padding: {
                bothSides: true,
                leftRightVal: `0 ${theme.sizes.utils.xs.rem}`,
              },
            }}
          >
            <div
              style={{
                width: "203px",
              }}
            >
              <Nav links={[{ href: "/", name: renderBranding() }]} />
            </div>
            <div style={{}}>
              <Nav links={links} />
            </div>
          </Wrapper>
        </Header>
        <Container>
          <SideBar>
            <Wrapper
              justify="center"
              direction="column"
              layout={{
                padding: {
                  bothSides: true,
                  leftRightVal: `0 ${theme.sizes.utils.xs.rem}`,
                },
              }}
            >
              <h1>LEFT NAV</h1>
              <Nav links={[{ href: "/workspace", name: "workspace" }]} />
            </Wrapper>
          </SideBar>
          {/* <CenterStage>{children}</CenterStage> */}
          {/* <SideBar>
            <Wrapper
              direction="column"
              layout={{
                padding: {
                  bothSides: true,
                  leftRightVal: `0 ${theme.sizes.utils.xs.rem}`,
                },
              }}
            >
              {["eugene", "peter", "maestrado"].map((a, i) => (
                <li key={i}>{a}</li>
              ))}
              <h1>RIGHT NAV</h1>
              The third column, with more content than before!
              asdffasdasfafasdfadfsdfdsafdddddeeeeeeeee
            </Wrapper>
          </SideBar> */}
        </Container>
        <Drawer />
        <Footer>Design and Developed By Eugene D Maestrado</Footer>
      </ThemeProvider>
    </>
  );
}
