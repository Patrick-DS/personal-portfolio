// Third-party imports
import { useState } from "react"
import type { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"

// Global imports
import { GlobalStyles, ThemeNames, themes } from "@/styles"

// Local imports
import CustomThemeContext from "./context"

////////////////////////////////////////////////////////////////////////////////

interface CustomThemeProvider {
	defaultThemeName?: ThemeNames
	children: ReactNode
}

/**
 * @function CustomThemeProvider
 * @category Contexts
 * @description Context that enables rendering a CustomTheme by providing its data.
 */
const CustomThemeProvider: FC<CustomThemeProvider> = ({
	defaultThemeName = ThemeNames.LIGHT,
	children,
}) => {
    // Hooks
	const [selectedThemeName, setThemeName] = useState<ThemeNames>(defaultThemeName)

    // Props
    const providerProps = {
        value: {
            selectedThemeName,
			selectTheme: (themeName: ThemeNames) => setThemeName(themeName), 
        }
    }

    return (
        <CustomThemeContext.Provider {...providerProps}>
			<GlobalStyles />
			<ThemeProvider theme={themes[selectedThemeName]}>
            	{children}
			</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}

export default CustomThemeProvider
