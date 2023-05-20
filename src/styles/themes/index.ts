import { default as Light } from "./light"
import { default as Dark } from "./dark"

const defaultTheme = Light

type ThemeName = "Light" | "Dark"

const themes = {
    Light,
    Dark,
    selectedTheme: defaultTheme,
    selectTheme: (themeName: ThemeName) => {
        themes.selectedTheme = themes[themeName]
    }
}

export default themes