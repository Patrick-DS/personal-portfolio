// Third-party imports
import type { DefaultTheme } from "styled-components"

// Global imports

// Local imports
import { default as Light } from "./light"
import { default as Dark } from "./dark"
import { default as CommonTheme } from "./common"
import { ThemeNames } from "./types"

////////////////////////////////////////////////////////////////////////////////

export const themes: {[key in ThemeNames]: DefaultTheme} = {
	[ThemeNames.LIGHT]: { ...CommonTheme, ...Light },
	[ThemeNames.DARK]: { ...CommonTheme, ...Dark },
}

export { ThemeNames }