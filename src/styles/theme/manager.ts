// Third-party imports

// Global imports

// Local imports
import { themes, ThemeNames } from "./themes"

////////////////////////////////////////////////////////////////////////////////

const defaultThemeName = ThemeNames.LIGHT

const themeManager = {
    themes,
    selectedTheme: themes[defaultThemeName],
    selectTheme: (themeName: ThemeNames) => {
        themeManager.selectedTheme = themes[themeName]
    }
}

export default themeManager