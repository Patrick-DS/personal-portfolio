// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export enum ThemeNames {
	LIGHT = "Light",
	DARK = "Dark",
}

export interface Colors {
	header: {
		text: {
			default: string
			hovered: string
			active: string
		},
		container: {
			background: string
			border: string
		},
	},
	footer: {
		text: {
			default: string
			hovered: string
			active: string
		},
		container: {
			background: string
			border: string
		},
	},
	shadowbox: {
		text: {
			default: string,
		},
		container: {
			background: string,
			border: string,
			boxshadow: string,
		}
	}
	// white: string
	// lightGray: string
	// gray: string
	// darkGray: string
	// black: string
}