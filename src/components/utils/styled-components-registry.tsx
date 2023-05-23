"use client"
// Third-party imports
import { useState } from "react"
import type { FC, ReactNode } from "react"
import { useServerInsertedHTML } from "next/navigation"
import {
	ServerStyleSheet,
	StyleSheetManager,
} from "styled-components"

// Global imports
import { CustomThemeProvider } from "@/contexts"
import { ThemeNames } from "@/styles"

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface RegistryProps {
	children: ReactNode
}

const StyledComponentsRegistry: FC<RegistryProps> = ({ children }) => {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		styledComponentsStyleSheet.instance.clearTag()
		return <>{styles}</>
	})

	return typeof window === "undefined" ? (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<CustomThemeProvider defaultThemeName={ThemeNames.DARK}>
				{children}
			</CustomThemeProvider>
		</StyleSheetManager>
	) : (
		<>
			<CustomThemeProvider defaultThemeName={ThemeNames.DARK}>
				{children}
			</CustomThemeProvider>
		</>
	)
}

export default StyledComponentsRegistry
