// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports

// Local imports
import Background from "./Background"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Background />

const storyOptions: Meta<typeof Background> = {
	title: "Layout/Background",
	component: Background,
}

export default storyOptions
