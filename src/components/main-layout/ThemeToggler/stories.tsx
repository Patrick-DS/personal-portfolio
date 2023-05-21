// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports

// Local imports
import ThemeToggler from "./ThemeToggler"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <ThemeToggler />

const storyOptions: Meta<typeof ThemeToggler> = {
	title: "Layout/Theme Toggler",
	component: ThemeToggler,
}

export default storyOptions
