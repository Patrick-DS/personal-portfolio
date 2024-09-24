"use client"
// Third-party imports
import type { FC } from "react"

// Global imports
import { ThemeToggler } from "@/components/main-layout"
import { useThemeManager } from "@/contexts"

// Local imports
import headerContent from "./links"
import { NavBar, DesktopNavItem, StyledLink } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Header
 * @category Components
 * @subcategory Main Layout
 * @description The website's header for all pages.
 */
const Header: FC<{}> = () => {
	// Hooks
	const { toggleTheme } = useThemeManager()

	return (
		<NavBar>
			<DesktopNavItem direction="right" $paddingX="10px">
				<ThemeToggler onTogglerClick={toggleTheme} />
			</DesktopNavItem>
			{headerContent.map(({ itemId, direction, href, displayText }) => (
				<DesktopNavItem key={itemId} direction={direction}>
					<StyledLink href={href}>{displayText}</StyledLink>
				</DesktopNavItem>
			))}
		</NavBar>
	)
}

export default Header
