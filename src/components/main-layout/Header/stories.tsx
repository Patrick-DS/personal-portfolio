// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"

// Local imports
import Header from "./Header"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Header />

const storyOptions: Meta<typeof Header> = {
	title: "Layout/Header",
	component: Header,
	decorators: [backgroundDecorator]
}

export default storyOptions
