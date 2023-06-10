// Third-party imports
import styled from "styled-components"

// Global imports
import { onWidthLessThan } from "@/styles"

// Local imports
import { BlogCardContainer } from "../styles"

////////////////////////////////////////////////////////////////////////////////

export const HeadlineContainer = styled(BlogCardContainer)`
	/* Positioning */
	display: grid;
	gap: 20px;

	/* Dimensions */
	width: 100%;
	margin-bottom: 50px;

	@media ${onWidthLessThan("large")} {
		margin-bottom: 30px;
	}

	@media ${onWidthLessThan("medium")} {
		margin-bottom: 20px;
	}

	@media ${onWidthLessThan("small")} {
		margin-bottom: 0px;
	}
`

export const BlogTitle = styled.h1`
	/* Positioning */
	display: flex;
	justify-content: center;
	align-items: center;

	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 36px;
	font-weight: 400;
	text-align: center;
`

export const BlogSubtitle = styled.h2`
	/* Positioning */
	display: flex;
	justify-content: center;
	align-items: center;

	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 30px;
	font-weight: 400;
	text-align: center;
`
