// Third-party imports
import styled from "styled-components"
import Image from "next/image"

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
		margin-bottom: 45px;
	}

	@media ${onWidthLessThan("medium")} {
		margin-bottom: 40px;
	}

	@media ${onWidthLessThan("small")} {
		margin-bottom: 30px;
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
	@media ${onWidthLessThan("large")} {
		font-size: 30px;
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 24px;
	}

	@media ${onWidthLessThan("small")} {
		font-size: 22px;
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 20px;
	}
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
	@media ${onWidthLessThan("large")} {
		font-size: 24px;
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 20px;
	}

	@media ${onWidthLessThan("small")} {
		font-size: 18px;
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 16px;
	}
	font-weight: 400;
	text-align: center;
`

export const ProfilePicture = styled(Image)`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	border-bottom: 2px solid
		${({ theme }) => theme.colors.shadowbox.container.border};
`
