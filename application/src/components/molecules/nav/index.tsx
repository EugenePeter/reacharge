"use client";
import React, { FC } from "react";
import { Children } from "@/types";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
interface Props extends Children {
  links: Array<{
    href: string;
    name: string | React.ReactNode;
  }>;
}

const Nav: FC<Props> = (props) => {
  const { links } = props;
  const pathname = usePathname();
  return (
    <StyledNav>
      {links.map((l, i) => {
        const isActive = pathname.startsWith(l.href);

        console.log("IS ACTIVE:", pathname);
        return (
          <StyledLink
            key={i}
            href={l.href}
            className={`${isActive ? "active" : ""} hello`}
          >
            {l.name}
          </StyledLink>
        );
      })}
    </StyledNav>
  );
};

export default Nav;

export const StyledNav = styled.nav`
  a.active {
    color: #3971ff;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;
