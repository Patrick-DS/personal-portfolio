// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports
import { BlogCardContainer } from "../styles"

////////////////////////////////////////////////////////////////////////////////

export const ContentCardContainer = styled(BlogCardContainer)`
	/* Positioning */
	display: grid;
	gap: 20px;

	/* Dimensions */
	width: 100%;
	margin-bottom: 50px;
`

export const ContentTitle = styled.h3`
	/* Positioning */
	display: flex;
	justify-content: center;
	align-items: center;
	
	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 24px;
	font-weight: 400;
	text-align: center;
`

export const DateDisplay = styled.h4`
	/* Positioning */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	
	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 18px;
	font-weight: 400;
	text-align: center;
`

export const Content = styled.p`
	/* Dimensions */
	width: 100%;
	
	/* Text */
	font-size: 18px;
	font-weight: 400;
`