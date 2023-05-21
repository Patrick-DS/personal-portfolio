// Third-party imports
import React from "react"

// Global imports

// Local imports
import { StyledBackground } from "./styles"
import websiteBackground from "./website-background.jpg"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Background
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const Background = () => (
	<StyledBackground
		src={websiteBackground}
		fill
		style={{
			objectFit: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		}}
		alt="Decorative background"
	/>
)

export default Background