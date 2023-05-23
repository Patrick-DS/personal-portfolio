// Third-party imports
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { ThemeNames } from "@/styles"
import { useThemeManager } from "@/contexts"

// Local imports
import darkThemeLogo from "./dark-theme-logo.png"
import lightThemeLogo from "./light-theme-logo.png"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ThemeToggler
 * @category Components
 * @subcategory Main Layout
 * @description Button used to toggle the theme used on the website when clicked.
 */
const ThemeToggler = () => {
	// Hooks
	const {selectedThemeName, selectTheme} = useThemeManager()

	// Variables
	const toggleTheme = () => selectTheme(
		selectedThemeName === ThemeNames.LIGHT 
		? ThemeNames.DARK 
		: ThemeNames.LIGHT
	)

	const themeLogo = {
		[ThemeNames.LIGHT]: darkThemeLogo,
		[ThemeNames.DARK]: lightThemeLogo,
	}[selectedThemeName]

	// Props
	const themeLogoImageProps = {
		src: themeLogo, 
		width: 24,
		height: 24,
	}

	return (
		<Image
			onClick={toggleTheme}
			alt="Theme toggler icon"
			{...themeLogoImageProps}
		/>	
	)
}

export default ThemeToggler
