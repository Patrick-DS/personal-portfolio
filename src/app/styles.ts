// Third-party imports
import styled from "styled-components"
import Link from "next/link"

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
	min-height: ${({ theme }) =>
		`calc(100vh - ${theme.dimensions.header.height} - ${theme.dimensions.footer.height})`};
	margin: ${({ theme }) => theme.dimensions.header.height} auto
		${({ theme }) => theme.dimensions.footer.height} auto;
	padding: 100px 50px;

	@media ${onWidthLessThan("large")} {
		padding: 80px 45px;
	}

	@media ${onWidthLessThan("medium")} {
		padding: 60px 40px;
	}

	@media ${onWidthLessThan("small")} {
		padding: 40px 30px;
	}

	@media ${onWidthLessThan("mini")} {
		padding: 20px 20px;
	}
`

export const HomepageCardContainer = styled(BlogCardContainer)`
	/* Positioning */
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

	/* Dimensions */
	width: 100%;
	text-align: center;

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
`

export const TechnologiesGridHeader = styled.p``

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	gap: 0px 5%;
	padding: 30px 0 0 0;

	@media ${onWidthLessThan("large")} {
		grid-template-columns: repeat(5, 1fr);
		padding-top: 24px;
	}

	@media ${onWidthLessThan("medium")} {
		grid-template-columns: repeat(4, 1fr);
		padding-top: 20px;
	}

	@media ${onWidthLessThan("small")} {
		grid-template-columns: repeat(3, 1fr);
		padding-top: 18px;
	}

	@media ${onWidthLessThan("mini")} {
		grid-template-columns: repeat(2, 1fr);
		padding-top: 16px;
	}

	img {
		// So that images are responsive
		width: 100%;
		height: auto;
	}
`

export const StyledLink = styled(Link)`
	/* Color */
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.header.text.active} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.header.text.hovered};
	}
`
