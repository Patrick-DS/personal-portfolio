"use client"
// Third-party imports
import type { FC } from "react"

// Global imports
import { ThemeToggler } from "@/components/main-layout"
import { useThemeManager } from "@/contexts"

// Local imports
import headerContent from "./links"
import { NavBar, DesktopNavItem, StyledLink, MobileBurgerMenu } from "./styles"
import { Icon, ImageNames } from "@/components/generic"

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
			<MobileBurgerMenu>
				<Icon
					imageName={ImageNames.BURGER_MENU}
					alt={ImageNames.BURGER_MENU}
					width={64}
					height={64}
					style={{
						width: "auto",
						height: "75%",
					}}
				/>
			</MobileBurgerMenu>
		</NavBar>
	)
}

export default Header
