// Third-party imports
import 'styled-components'

// Global imports

// Local imports
import { breakpoints, devices } from "./common/breakpoints"
import devices from "./common/devices"
import type { ThemeNames, Colors } from "./types"

////////////////////////////////////////////////////////////////////////////////

// Extend the DefaultTheme interface with your additional properties
declare module 'styled-components' {
	export interface DefaultTheme {
		themeName: ThemeNames
		colors: Colors
		breakpoints: typeof breakpoints
		devices: typeof devices
	}
}
