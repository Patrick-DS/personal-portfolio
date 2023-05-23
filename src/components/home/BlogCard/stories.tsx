// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"

// Local imports
import BlogCard from "./BlogCard"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => (
	<BlogCard>
		<div style={{ width: "900px", height: "500px" }} />
	</BlogCard>
)

const storyOptions: Meta<typeof BlogCard> = {
	title: "Layout/BlogCard",
	component: BlogCard,
	decorators: [backgroundDecorator]
}

export default storyOptions
