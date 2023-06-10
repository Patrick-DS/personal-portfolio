// Third-party imports
import { DefaultTheme } from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

type onWidthLessThanType = (
	breakpoint: keyof DefaultTheme["breakpoints"]
) => (
	{ theme }: { theme: DefaultTheme }
) => string

/**
 * @function onWidthLessThan
 * @category Styles
 * @description Determines the required substring to obtain the media query.
 * @param {keyof DefaultTheme["breakpoints"]} breakpoint - The name of the breakpoint to use. 
 * @returns {string} The CSS substring required in styled-components to determine the corresponding media query.
 * Important: Use the breakpoints in decreasing order of size to avoid the media queries of the large breakpoints over-writing the values of the media queries of the smaller breakpoints.
 */
const onWidthLessThan: onWidthLessThanType = (breakpoint) => (
	({ theme }) => (
		`(max-width: ${theme.breakpoints[breakpoint]})`
	)
)

export default onWidthLessThan