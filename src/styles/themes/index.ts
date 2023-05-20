import { default as Light } from "./light"
import { default as Dark } from "./dark"
import { default as CommonTheme } from "./common"

const LightTheme = { ...CommonTheme, ...Light }
const DarkTheme = { ...CommonTheme, ...Dark }

export enum ThemeNames {
    LIGHT = "Light",
    DARK = "Dark",
}

const defaultThemeName = ThemeNames.LIGHT

export const themes = {
    [ThemeNames.LIGHT]: LightTheme,
    [ThemeNames.DARK]: DarkTheme,
}

const themeManager = {
    themes,
    selectedTheme: themes[defaultThemeName],
    selectTheme: (themeName: ThemeNames) => {
        themeManager.selectedTheme = themes[themeName]
    }
}

export default themeManager