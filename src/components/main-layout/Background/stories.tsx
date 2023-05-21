// Third-party imports
import type { Meta, ReactRenderer } from "@storybook/react"
import type { PartialStoryFn } from "@storybook/types"

// Global imports

// Local imports
import Background from "./Background"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Background />

const storyOptions: Meta<typeof Background> = {
	title: "Layout/Background",
	component: Background,
	excludeStories: /.*Decorator$/, 
}

export const backgroundDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
	<>
		<Story />
		<Background />
	</>
)

export default storyOptions
