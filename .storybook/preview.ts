// Third-party imports
import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"

// Global imports
import { ThemeProvider } from "styled-components"
import { GlobalStyles, themes, ThemeNames } from "@/styles"
import { FontDecorator, CenteringDecorator } from "@/stories"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles,
		themes,
		defaultTheme: ThemeNames.LIGHT,
		Provider: ThemeProvider,
	}),
	FontDecorator,
	CenteringDecorator,
]

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
