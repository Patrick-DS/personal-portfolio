// Third-party imports

// Global imports

// Local imports
import { default as Light } from "./light"
import { default as Dark } from "./dark"
import { default as CommonTheme } from "./common"
import { ThemeNames } from "./types"
import type { Theme } from "./types"

////////////////////////////////////////////////////////////////////////////////

export type { Theme } 

export const themes: {[key in ThemeNames]: Theme} = {
	[ThemeNames.LIGHT]: { ...CommonTheme, ...Light },
	[ThemeNames.DARK]: { ...CommonTheme, ...Dark },
}

export { ThemeNames }