"use client"
// Third-party imports
import React from "react"

// Global imports

// Local imports
import footerContent from "./content"
import { NavBar, NavItem } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Footer
 * @category Components
 * @subcategory Main Layout
 * @description The website's footer for all pages.
 */
const Footer = () => (
	<NavBar>
		{footerContent.map(({itemId, direction, displayText}) => (
			<NavItem key={itemId} direction={direction}>
				{displayText}
			</NavItem>
		))}
	</NavBar>
)

export default Footer