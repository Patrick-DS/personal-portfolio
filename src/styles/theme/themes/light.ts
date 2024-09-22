// Third-party imports

// Global imports

// Local imports
import { ThemeNames } from "./types"

////////////////////////////////////////////////////////////////////////////////

const lightTheme = {
	themeName: ThemeNames.LIGHT,
	colors: {
		header: {
			text: {
				default: "#000000",
				hovered: "#000000",
				active: "#000000",
			},
			container: {
				background: "#DDDDDDFA",
				border: "#DDDDDDFA",
			},
		},
		footer: {
			text: {
				default: "#000000",
				hovered: "#000000",
				active: "#000000",
			},
			container: {
				background: "#DDDDDDEA",
				border: "#DDDDDDFA",
			},
		},
		shadowbox: {
			text: {
				default: "#000000",
			},
			container: {
				background: "#DDDDDDCA",
				border: "#DDDDDDCA",
				boxshadow: "#DDDDDDCA",
			},
		},
		// white: "#222222",
		// lightGray: "#666666",
		// gray: "#888888",
		// darkGray: "#dddddd",
		// black: "#ffffff",
	},
}

export default lightTheme
