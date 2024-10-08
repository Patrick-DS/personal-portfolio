// Third-party imports
import styled from "styled-components"
import Link from "next/link"

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

export const Content = styled.div`
	/* Dimensions */
	width: 100%;
	
	/* Text */
	font-size: 18px;
	font-weight: 400;
	
	p {
		padding-bottom: 20px;
	}

	ul { 
		padding-left: 20px;
		padding-bottom: 20px;
	}
`

export const MarkdownLink = styled(Link)`
	color: ${({ theme }) => theme.colors.shadowbox.text.default};
`