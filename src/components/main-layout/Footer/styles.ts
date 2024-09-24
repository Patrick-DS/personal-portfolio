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
	z-index: 100;

	/* Dimensions */
	width: 100vw;
	min-height: ${({ theme }) => theme.dimensions.footer.height};
	height: ${({ theme }) => theme.dimensions.footer.height};
	padding: 0px 15px;

	/* Color */
	background: ${({ theme }) => theme.colors.footer.container.background};

	/* Border */
	border-top: 1px solid ${({ theme }) => theme.colors.footer.container.border};
	box-shadow: 0px 0px 10px 2px
		${({ theme }) => theme.colors.footer.container.border};
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
	color: ${({ theme }) => theme.colors.footer.text.default};
	${({ theme }) => theme.devices.availableOnDesktopOnly}
`
