"use client"
// Third-party imports
import type { FC } from "react"

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
const Header: FC<{}> = () => (
	<NavBar>
		<StyledLink href={routerPaths.home} direction="left">
			<NavItem>
					Patrick Da Silva
			</NavItem>
		</StyledLink>
		<StyledLink href={routerPaths.contact} direction="right">
			<NavItem>
					Contact
			</NavItem>
		</StyledLink>
		<StyledLink href={routerPaths.cv} direction="right">
			<NavItem>
					CV
			</NavItem>
		</StyledLink>
		<StyledLink href={routerPaths.projects} direction="right">
			<NavItem>
					Projects
			</NavItem>
		</StyledLink>
	</NavBar>
)

export default Header
