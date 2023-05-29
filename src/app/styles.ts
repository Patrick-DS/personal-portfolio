// Third-party imports
import styled from "styled-components"

// Global imports
import { onWidthLessThan } from "@/styles"
import { BlogCardContainer } from "@/components/generic/cards/styles"

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

	@media ${onWidthLessThan("large")} {
		padding: 80px 0px;
	}
	
	@media ${onWidthLessThan("medium")} {
		padding: 60px 0px;
	}

	@media ${onWidthLessThan("small")} {
		padding: 40px 0px;
	}

	@media ${onWidthLessThan("mini")} {
		padding: 20px 0px;
	}
`

export const HomepageCardContainer = styled(BlogCardContainer)`
	/* Positioning */

	/* Dimensions */
	width: 100%;
`

export const StyledGrid = styled.div`
	display: grid;
	grid-template-rows: repeat(1fr, 3);
	width: 100%;
	height: 500px;
`