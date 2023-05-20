import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, themeManager, ThemeNames } from "@/styles"

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles,
		themes: themeManager.themes,
		defaultTheme: ThemeNames.LIGHT,
		Provider: ThemeProvider,
	})
]

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
}

export default preview
