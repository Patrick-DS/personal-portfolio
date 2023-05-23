// Third-party imports
import styled from "styled-components"
import Link from "next/link"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const NavBar = styled.footer`
	/* Positioning */
	position: fixed;
	bottom: 0;
	left: 0;

	/* Dimensions */
	width: 100vw;
	min-height: 50px;
	height: 50px;
	padding: 0px 15px;

	/* Color */
	background: ${({ theme }) => theme.colors.headerBackground};

	/* Border */
	border-top: 1px solid ${({ theme }) => theme.colors.black};
	box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.black};
`

interface NavItemProps {
	direction: "left" | "right"
}

export const NavItem = styled.span<NavItemProps>`
	/* Positioning */
	float: ${({ direction }) => direction};
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;
	
	/* Dimensions */
	min-width: 90px;
	height: 100%;

	/* Color */
	color: ${({ theme }) => theme.colors.headerText};
	${({ theme }) => theme.devices.availableOnDesktopOnly}
`

