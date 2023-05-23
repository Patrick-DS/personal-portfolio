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
		headerBackground: "#222222fa",
		headerText: "#FFF",
		headerTextHovered: "#FFF",
		headerTextActive: "#FFF",
		headerBorder: "#000000",
		text: "#000000",
		// white: "#dddddd",
		// lightGray: "#aaaaaa",
		// gray: "#888888",
		// darkGray: "#222222",
		// black: "#000000",
	},
}

export default darkTheme
