// Third-party imports

// Global imports

// Local imports
import breakpoints from "./breakpoints"

////////////////////////////////////////////////////////////////////////////////

const devices = {
	availableOnMobileOnly: `
		@media (min-width: ${breakpoints.medium}) {
			display: none !important;
		}
	`,
	availableOnDesktopOnly: `
		@media (max-width: ${breakpoints.medium}) {
			display: none !important;
		}
	`,
}

export default devices
