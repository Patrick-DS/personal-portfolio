// Third-party imports
import styled from "styled-components"

// Global imports
import { onWidthLessThan } from "@/styles"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const BlogContainer = styled.div`
	/* Positioning */
	display: flex;
	flex-direction: column;
	gap: 50px;

	@media ${onWidthLessThan("large")} {
		gap: 40px;
	}

	@media ${onWidthLessThan("medium")} {
		gap: 35px;
	}

	@media ${onWidthLessThan("small")} {
		gap: 30px;
	}

	/* Dimensions */
	width: 100%;
	padding: 0 5%;
	min-height: ${({ theme }) =>
		`calc(100vh - ${theme.dimensions.header.height} - ${theme.dimensions.footer.height})`};
`
