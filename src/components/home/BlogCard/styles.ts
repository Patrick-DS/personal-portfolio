// Third-party imports
import styled from "styled-components"

// Global imports
import { ShadowBox } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const BlogCardContainer = styled(ShadowBox)`
	/* Dimensions */
	width: 100%;
	min-height: 150px;	
	padding: 20px 5%;

	/* Text */
	color: ${({ theme }) => theme.colors.shadowbox.text.default};
`