// Third-party imports
import styled from "styled-components"
import Link from "next/link"

// Global imports
import { onWidthLessThan } from "@/styles"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const NavBar = styled.header`
	/* Positioning */
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;

	/* Dimensions */
	width: 100vw;
	min-height: ${({ theme }) => theme.dimensions.header.height};
	height: ${({ theme }) => theme.dimensions.header.height};
	padding: 0px 15px;

	@media ${onWidthLessThan("medium")} {
		padding: 0;
	}

	/* Color */
	background: ${({ theme }) => theme.colors.header.container.background};

	/* Border */
	border-bottom: 1px solid
		${({ theme }) => theme.colors.header.container.border};
	box-shadow: 0px 0px 10px 2px
		${({ theme }) => theme.colors.header.container.border};
`

interface StyledLinkProps {
	direction: "left" | "right"
	$paddingX?: string
}

export const DesktopNavItem = styled.span<StyledLinkProps>`
	/* Positioning */
	float: ${({ direction }) => direction};
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	${({ $paddingX }) => ($paddingX ? `padding: 0px ${$paddingX}` : "")};

	/* Dimensions */
	height: 100%;

	/* Color */
	color: ${({ theme }) => theme.colors.header.text.default};
	${({ theme }) => theme.devices.availableOnDesktopOnly}
`

export const MobileBurgerMenu = styled.div`
	/* Positioning */
	float: left;
	display: flex;
	justify-content: center;
	align-items: center;

	/* Dimensions */
	height: 100%;
	width: auto;

	/* Content */
	padding: 10px 10px 10px 15px;

	${({ theme }) => theme.devices.availableOnMobileOnly}
`

export const MobileMenu = styled.div`
	/* Positioning */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	/* Positioning */
	height: 100vh;
	width: 300px;
	z-index: 50;

	/* Dimensions */
	padding: 50px 20px;

	/* Color */
	background-color: ${({ theme }) =>
		theme.colors.header.container.background};

	/* Border */
	border-bottom: 1px solid
		${({ theme }) => theme.colors.header.container.border};
	box-shadow: 0px 0px 10px 2px
		${({ theme }) => theme.colors.header.container.border};
`

export const MobileNavItem = styled.span<StyledLinkProps>`
	/* Positioning */
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;

	/* Dimensions */
	height: 50px;

	/* Color */
	color: ${({ theme }) => theme.colors.header.text.default};
	${({ theme }) => theme.devices.availableOnMobileOnly}
`

export const StyledLink = styled(Link)`
	/* Positioning */
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	padding: 0px 10px;

	/* Dimensions */
	width: 100%;
	height: 100%;

	/* Color */
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.header.text.active} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.header.text.hovered};
	}

	/* Text */
	text-decoration: none;
`
