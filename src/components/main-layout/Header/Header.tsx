"use client"
// Third-party imports
import type { FC } from "react"

// Global imports
import ThemeToggler from "@/components/main-layout/ThemeToggler"

// Local imports
import headerContent from "./links"
import { NavBar, NavItem, StyledLink } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Header
 * @category Components
 * @subcategory Main Layout
 * @description The website's header for all pages.
 */
const Header: FC<{}> = () => (
	<NavBar>
		<NavItem direction="right" paddingX="10px">
			<ThemeToggler />
		</NavItem>
		{headerContent.map(({itemId, direction, href, displayText}) => (
			<NavItem key={itemId} direction={direction}>
				<StyledLink href={href}>
						{displayText}
				</StyledLink>
			</NavItem>
		))}
	</NavBar>
)

export default Header
