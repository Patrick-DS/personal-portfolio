// Third-party imports
import styled from "styled-components"
import Link from "next/link"

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

export const ContentLink = styled(Link).attrs(() => ({ target: "_blank" }))`
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.blog.text.active} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.blog.text.hovered};
	}
`

export const BlogText = styled.span`
	white-space: pre-wrap;
`

export const StyledList = styled.ul`
	padding: 1rem 0px 1rem 20px;
	
	li:not(:last-child) { 
		margin-bottom: 10px;  
	}
`