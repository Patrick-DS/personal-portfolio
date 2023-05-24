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
	min-height: ${({ theme }) => (
		`calc(100vh - ${theme.dimensions.header.height
		} - ${theme.dimensions.footer.height
		})`
	)};
	margin: ${({ theme }) => theme.dimensions.header.height} auto ${({ theme }) => theme.dimensions.footer.height} auto;
	padding: 100px 0px;
`
