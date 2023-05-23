// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledMain = styled.main`
	/* Positioning */
	display: flex;
	flex-direction: column;
	align-items: center;
	
	/* Dimensions */
	width: 100%;
	max-width: 1200px;
	height: 100%;
	min-height: 100vh;
	margin: ${({ theme }) => theme.dimensions.header.height} auto 0 auto;
`
