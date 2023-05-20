// Third-party imports

// Global imports

// Local imports
import { default as Light } from "./light"
import { default as Dark } from "./dark"
import { default as CommonTheme } from "./common"
import type { Theme } from "./types"

////////////////////////////////////////////////////////////////////////////////

export const LightTheme: Theme = { ...CommonTheme, ...Light }
export const DarkTheme: Theme = { ...CommonTheme, ...Dark }

export enum ThemeNames {
	LIGHT = "Light",
	DARK = "Dark",
}

export const themes = {
	[ThemeNames.LIGHT]: LightTheme,
	[ThemeNames.DARK]: DarkTheme,
}
