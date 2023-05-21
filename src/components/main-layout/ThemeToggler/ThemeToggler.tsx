// Third-party imports
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { ThemeNames } from "@/styles"

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
	const theme = useTheme()

	// Variables
	const themeName = theme?.themeName || ThemeNames.LIGHT

	const themeLogo = {
		[ThemeNames.LIGHT]: darkThemeLogo,
		[ThemeNames.DARK]: lightThemeLogo,
	}[themeName]

	// Props
	const themeLogoImageProps = {
		src: themeLogo, 
		width: 24,
		height: 24,
	}

	return (
		<Image
			onClick={() => console.log(themeLogo)}
			alt="Theme toggler icon"
			{...themeLogoImageProps}
		/>	
	)
}

export default ThemeToggler
