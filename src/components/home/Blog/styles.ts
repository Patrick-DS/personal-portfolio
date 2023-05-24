// Third-party imports
import styled from "styled-components"
import BlogCard from "../BlogCard"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const BlogContainer = styled.div`
	/* Positioning */
	display: flex;
	flex-direction: column;
	gap: 50px;

	/* Dimensions */
	width: 100%;
	padding: 0 5%;
	min-height: ${({ theme }) => (
		`calc(100vh - ${theme.dimensions.header.height
		} - ${theme.dimensions.footer.height
		})`
	)};
`

export const HeadlineContainer = styled(BlogCard)`
	/* Positioning */
	display: grid;
	gap: 20px;

	/* Dimensions */
	width: 100%;
	max-height: 225px;
	margin-bottom: 50px;
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