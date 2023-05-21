// Third-party imports
import styled from "styled-components"
import Link from "next/link"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const NavBar = styled.div`
	/* Positioning */
	position: fixed;
	top: 0;
	left: 0;

	/* Dimensions */
	width: 100vw;
	min-height: 50px;
	height: 50px;
	padding: 0px 15px;

	/* Color */
	background: ${({ theme }) => theme.colors.headerBackground};

	/* Border */
	border-bottom: 1px solid ${({ theme }) => theme.colors.black};
	box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.black};
`

export const NavItem = styled.span`
	/* Positioning */
	padding: 0px 15px;

	/* Color */
	color: ${({ theme }) => theme.colors.headerText};
	${({ theme }) => theme.devices.availableOnDesktopOnly}
`

interface StyledLinkProps {
	direction: "left" | "right"
}

export const StyledLink = styled(Link)<StyledLinkProps>`
	/* Positioning */
	float: ${({ direction }) => direction};
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;

	/* Dimensions */
	min-width: 90px;
	height: 100%;

	/* Color */
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.headerTextActive} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.headerTextHovered};
	}

	/* Text */
	text-decoration: none;
`
