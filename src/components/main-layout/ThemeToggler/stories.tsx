// Third-party imports
import type { Meta } from "@storybook/react"
import styled from "styled-components"

// Global imports

// Local imports
import ThemeToggler from "./ThemeToggler"

////////////////////////////////////////////////////////////////////////////////

const StyledBackground = styled.div`
	/* Positioning */
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;

	/* Dimensions */
	width: 100vw;
	height: 100vh;

	/* Background */
	background-color: ${({theme}) => theme.colors.headerBackground}; 
	background-position: center;
	background-repeat: no-repeat;
	object-fit: cover;
`

export const Default = () => (
	<>
		<StyledBackground />
		<ThemeToggler />
	</>
)

const storyOptions: Meta<typeof ThemeToggler> = {
	title: "Layout/Theme Toggler",
	component: ThemeToggler,
}

export default storyOptions
