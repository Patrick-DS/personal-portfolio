// Third-party imports
import { createContext } from "react"

// Global imports
import { ThemeNames } from "@/styles";

// Local imports
import type { ThemeManagerContextType } from "./types"

////////////////////////////////////////////////////////////////////////////////

const defaultThemeManager: ThemeManagerContextType = {
	selectedThemeName: ThemeNames.LIGHT,
	selectTheme: (themeName: ThemeNames) => {}
}

/**
 * @function ThemeManagerContext
 * @category Contexts
 * @description Creates a React context to store the selected theme's name and a callback to change the theme.
 */
const ThemeManagerContext = createContext<ThemeManagerContextType>(defaultThemeManager)

export default ThemeManagerContext