// Third-party imports
import { ReactRenderer } from "@storybook/react"
import type { PartialStoryFn } from "@storybook/types"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const PageContentDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
	<div style={{ width: "100vw", maxWidth: "1200px", minHeight: "100vh" }}>
		<Story />
	</div>
)

export default PageContentDecorator