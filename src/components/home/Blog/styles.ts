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

export const ContentLink = styled(Link)`
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.blog.text.active} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.blog.text.hovered};
	}
`