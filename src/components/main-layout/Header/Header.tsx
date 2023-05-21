"use client"
// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import headerContent from "./content"
import { NavBar, NavItem, StyledLink } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Header
 * @category Generic
 * @description The website's header for all pages.
 */
const Header: FC<{}> = () => (
	<NavBar>
		{headerContent.map(({linkId, direction, href, displayText}) => (
			<StyledLink key={linkId} href={href} direction={direction}>
				<NavItem>
					{displayText}
				</NavItem>
			</StyledLink>
		))}
	</NavBar>
)

export default Header
