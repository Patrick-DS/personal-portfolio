"use client"
// Third-party imports
import React from "react"
import { DefaultTheme, useTheme } from "styled-components"

// Global imports
import { ThemeNames } from "@/styles"

// Local imports
import { StyledBackground } from "./styles"
import websiteBackgroundLight from "./website-background-light.jpg"
import websiteBackgroundDark from "./website-background-dark.jpg"

////////////////////////////////////////////////////////////////////////////////

const websiteBackground = {
	[ThemeNames.LIGHT]: websiteBackgroundLight,
	[ThemeNames.DARK]: websiteBackgroundDark,
}

/**
 * @function Background
 * @category Components
 * @subcategory Layout
 * @description Renders the background image on all website pages.
 */
const Background = () => {
	// Hooks
	const theme = useTheme()

	// Variables
	const themeName = theme?.themeName || ThemeNames.LIGHT

	// Props
	const styledBackgroundProps = {
		src: websiteBackground[themeName],
		alt: "Decorative background",
		fill: true,
	}

	return (
		<StyledBackground {...styledBackgroundProps} />
	)
}

export default Background