// Third-party imports
import styled from "styled-components"
import Link from "next/link"

// Global imports

// Local imports
import { onWidthLessThan } from "@/styles"
import { BlogCardContainer } from "@/components/generic/cards/styles"

////////////////////////////////////////////////////////////////////////////////

export const CVPageCardContainer = styled(BlogCardContainer)`
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
`

export const CVPageTitle = styled.h1`
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

export const CVPageHeadline = styled.p`
	/* Positioning */
	display: inline-block;
	justify-content: center;
	align-items: center;
	margin: 30px 0;

	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 24px; /* Reduced by 2px from 36px */
	@media ${onWidthLessThan("large")} {
		font-size: 24px; /* Reduced by 2px from 30px */
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 20px; /* Reduced by 2px from 24px */
	}

	@media ${onWidthLessThan("small")} {
		font-size: 18px; /* Reduced by 2px from 22px */
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 16px; /* Reduced by 2px from 20px */
	}
	font-weight: 400;
	text-align: center;
`

export const CVPageContent = styled.p`
	/* Positioning */
	display: inline-block;
	justify-content: flex-start;
	align-items: flex-start;
	/* margin: 0 30px; */

	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 24px; /* Reduced by 2px from 36px */
	@media ${onWidthLessThan("large")} {
		font-size: 24px; /* Reduced by 2px from 30px */
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 20px; /* Reduced by 2px from 24px */
	}

	@media ${onWidthLessThan("small")} {
		font-size: 18px; /* Reduced by 2px from 22px */
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 16px; /* Reduced by 2px from 20px */
	}
	font-weight: 400;
	text-align: left;
`

export const CVPageHomePageLink = styled.h3`
	/* Positioning */
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	padding-top: 30px;

	/* Dimensions */
	width: 100%;

	/* Text */
	font-size: 24px; /* Reduced by 2px from 36px */
	@media ${onWidthLessThan("large")} {
		font-size: 24px; /* Reduced by 2px from 30px */
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 20px; /* Reduced by 2px from 24px */
	}

	@media ${onWidthLessThan("small")} {
		font-size: 18px; /* Reduced by 2px from 22px */
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 16px; /* Reduced by 2px from 20px */
	}
	font-weight: 400;
	text-align: left;
`

export const CVMethodsList = styled.ul`
	/* Positioning */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10px;

	/* Dimensions */
	width: 100%;

	/* Text */

	font-size: 24px; /* Reduced by 2px from 36px */
	@media ${onWidthLessThan("large")} {
		font-size: 24px; /* Reduced by 2px from 30px */
	}

	@media ${onWidthLessThan("medium")} {
		font-size: 20px; /* Reduced by 2px from 24px */
	}

	@media ${onWidthLessThan("small")} {
		font-size: 18px; /* Reduced by 2px from 22px */
	}

	@media ${onWidthLessThan("mini")} {
		font-size: 16px; /* Reduced by 2px from 20px */
	}
	font-weight: 400;
	text-align: left;

	/* Margin */
	margin: 0 20px;
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
