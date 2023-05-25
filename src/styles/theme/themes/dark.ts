// Third-party imports

// Global imports

// Local imports
import { ThemeNames } from "./types"

////////////////////////////////////////////////////////////////////////////////

const darkTheme = {
	themeName: ThemeNames.DARK,
	colors: {
		header: {
			text: {
				default: "#FFFFFF",
				hovered: "#FFFFFF",
				active: "#FFFFFF",
			},
			container: {
				background: "#222222FA",
				border: "#000000",
			},
		},
		footer: {
			text: {
				default: "#FFFFFF",
				hovered: "#FFFFFF",
				active: "#FFFFFF",
			},
			container: {
				background: "#222222FA",
				border: "#000000",
			},
		},
		shadowbox: {
			text: {
				default: "#FFFFFF",
			},
			container: {
				background: "#00000086",
				border: "#000000",
				boxshadow: "#000000",
			}
		},
		blog: {
			text: {
				default: "#FFFFFF",
				hovered: "#FFFFFF",
				active: "#FFFFFF",
			},
		},
		// white: "#dddddd",
		// lightGray: "#aaaaaa",
		// gray: "#888888",
		// darkGray: "#222222",
		// black: "#000000",
	},
}

export default darkTheme
