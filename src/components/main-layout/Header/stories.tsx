// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { Background } from "@/components/main-layout"

// Local imports
import Header from "./Header"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Header />

const storyOptions: Meta<typeof Header> = {
	title: "Layout/Header",
	component: Header,
	decorators: [
		(Story) => (
			<>
				<Story />
				<Background />
			</>
		),
	]
}

export default storyOptions
