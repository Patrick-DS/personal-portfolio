// Third-party imports
import styled from "styled-components"
import Image from "next/image"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledBackground = styled(Image)`
	/* Positioning */
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;

	/* Background Image */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	object-fit: cover;
`