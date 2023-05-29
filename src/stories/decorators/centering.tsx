// Third-party imports
import { ReactRenderer } from "@storybook/react"
import type { PartialStoryFn } from "@storybook/types"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CenteringDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
	<div style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "100vh",
	}}>
		<Story />
	</div>
)

export default CenteringDecorator