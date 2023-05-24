// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"
import { PageContentDecorator } from "@/stories"

// Local imports
import Blog from "./Blog"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => (
	<Blog />
)

export const WithChildren = () => (
	<Blog>
		<div style={{ width: "900px", height: "500px" }} />
	</Blog>
)

const storyOptions: Meta<typeof Blog> = {
	title: "Home/Blog",
	component: Blog,
	decorators: [backgroundDecorator, PageContentDecorator]
}

export default storyOptions
