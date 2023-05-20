// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports

// Local imports
import Header from "./Header"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Header />

const storyOptions: Meta<typeof Header> = {
	title: "Layout/Header",
	component: Header,
}

export default storyOptions
