"use client"
// Third-party imports
import React from "react"
import Link from "next/link"

// Global imports
import { routerPaths } from "@/constants"

// Local imports
import { NavBar, NavItem, StyledLink } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Header
 * @category Generic
 * @description The website's header for all pages.
 */
const Header = () => (
    <NavBar>
        <NavItem direction="left">
            <StyledLink href={routerPaths.home}>
                Patrick Da Silva
            </StyledLink>
        </NavItem>
        <NavItem direction="right">
            <StyledLink href={routerPaths.contact}>
                Contact
            </StyledLink>
        </NavItem>
        <NavItem direction="right">
            <StyledLink href={routerPaths.cv}>
                CV
            </StyledLink>
        </NavItem>
        <NavItem direction="right">
            <StyledLink href={routerPaths.projects}>
                Projects
            </StyledLink>
        </NavItem>
    </NavBar>
)

export default Header
