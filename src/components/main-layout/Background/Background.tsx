// Third-party imports
import React from "react"
// import { useTheme } from "styled-components"

// Global imports

// Local imports
import { StyledBackground } from "./styles"
import websiteBackground from "./website-background.jpg"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Background
 * @category Components
 * @subcategory Layout
 * @description Renders the background image on all website pages.
 */
const Background = () => {
	// Props
	const styledBackgroundProps = {
		src: websiteBackground,
		alt: "Decorative background",
		fill: true,
	}

	return (
		<StyledBackground {...styledBackgroundProps} />
	)
}

export default Background