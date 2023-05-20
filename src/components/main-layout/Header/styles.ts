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

	/* Color */
	background: ${({ theme }) => theme.colors.darkGray};

	/* Border */
	border-bottom: 1px solid ${({ theme }) => theme.colors.black};
	box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.black};
`

export const NavItem = styled.div<{ direction: any }>`
	/* Positioning */
	position: relative;
	float: ${({ direction }) => direction};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;

	/* Dimensions */
	height: 100%;
	min-width: 90px;

	/* Color */
	color: ${({ theme }) => theme.colors.gray};
	${({ theme }) => theme.devices.availableOnDesktopOnly}
`

export const StyledLink = styled(Link)`
	/* Color */
	&:link,
	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.gray} !important;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}
`
