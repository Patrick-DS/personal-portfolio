import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { GlobalStyles, themes } from "@/styles"

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles,
		themes,
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
