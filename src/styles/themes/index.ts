import { default as Light } from "./light"
import { default as Dark } from "./dark"
import { default as CommonTheme } from "./common"

const LightTheme = { ...CommonTheme, ...Light }
const DarkTheme = { ...CommonTheme, ...Dark }

const defaultTheme = LightTheme

type ThemeName = "Light" | "Dark"

const themes = {
    Light: LightTheme,
    Dark: DarkTheme,
    selectedTheme: defaultTheme,
    selectTheme: (themeName: ThemeName) => {
        themes.selectedTheme = themes[themeName]
    }
}

export default themes