// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout"

// Local imports
import ShadowBox from "./ShadowBox"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => (
	<ShadowBox>
		<div style={{ width: "500px", height: "300px" }} />
	</ShadowBox>
)

const storyOptions: Meta<typeof ShadowBox> = {
	title: "Layout/ShadowBox",
	component: ShadowBox,
	decorators: [backgroundDecorator]
}

export default storyOptions
