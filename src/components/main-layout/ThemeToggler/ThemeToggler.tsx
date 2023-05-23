// Third-party imports
import Image from "next/image"

// Global imports
import { ThemeNames } from "@/styles"
import { useThemeManager } from "@/contexts"

// Local imports
import darkThemeLogo from "./icons/dark-theme-logo.png"
import lightThemeLogo from "./icons/light-theme-logo.png"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ThemeToggler
 * @category Components
 * @subcategory Main Layout
 * @description Button used to toggle the theme used on the website when clicked.
 */
const ThemeToggler = () => {
	// Hooks
	const {selectedThemeName, toggleTheme} = useThemeManager()

	// Variables
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
